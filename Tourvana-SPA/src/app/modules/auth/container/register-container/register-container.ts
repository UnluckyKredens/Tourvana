import { AuthService } from './../../services/auth.service';
import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../../../shared/shared.module';
import { NavigationBar } from '../../../../core/layouts/navigation-bar/navigation-bar';
import { AppModule } from '../../../../app-module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterDto } from '../../../../shared/dtos/registerDto';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-container',
  standalone: false,
  templateUrl: './register-container.html',
  styleUrl: './register-container.scss'
})
export class RegisterContainer {

  constructor(private snackbar: MatSnackBar, private authService: AuthService, private router: Router) {}
  hide = signal(true);

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,9}$/)]),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required)
  })

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  validate() {
        if(this.registerForm.valid) {
      if(this.registerForm.value.password == this.registerForm.value.password2) {
        return true
      }else {
        this.snackbar.open("Hasła się nie zgadzają", "Ok", {duration: 500})
        this.registerForm.controls['password'].setErrors({'incorrect': true})
        this.registerForm.controls['password2'].setErrors({'incorrect': true})
        return false
      }
    }else {
      this.snackbar.open("Uzupełnij formularz", "Ok", {duration: 500})
      return false
    }
  }

  register() {
    if(this.validate() && this.registerForm.valid) {
      var body: RegisterDto = {
        name: this.registerForm.value.name!,
        surname: this.registerForm.value.surname!,
        email: this.registerForm.value.email!,
        phoneNumber: this.registerForm.value.phoneNumber!,
        password: this.registerForm.value.password!
      }
      this.authService.register(body).subscribe({
        next: ((res: any) => {
                if(res.message.toString() == "User registered successfully") {
          this.snackbar.open("Zarejestrowano Pomyślnie", "Ok", {duration: 800})
          this.router.navigate(['/auth'])
        }
      }),
      error: (err) => {
        var res = err.error.message
        if(res.toString() == "Phone is in use") {
          this.registerForm.controls['phoneNumber'].setErrors({'incorrect': true})
          this.snackbar.open("Numer juz jest uzywany", "Ok", {duration: 800})
        }else if(res.toString() == "Email already in use") {
          this.registerForm.controls['email'].setErrors({'incorrect': true})
          this.snackbar.open("Email juz jest uzywany", "Ok", {duration: 800})
        }else {
          this.snackbar.open(res, "Ok")
          console.log(res)
        }
      }
      })
    }
  }
}


