import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginDto } from '../../../../shared/dtos/login.dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  standalone: false,
  templateUrl: './login-container.html',
  styleUrl: './login-container.scss'
})
export class LoginContainer {
  constructor(private authServce: AuthService, private snackBar: MatSnackBar, private router: Router) {}
  hide = signal(true);
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  })

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login() {
    if(this.loginForm.valid) {
      var body: LoginDto = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      }

      this.authServce.login(body).subscribe({
        next: (res) => {
          localStorage.setItem('userToken', res)
          this.snackBar.open("Zalogowano", "Ok", {duration: 800});
          this.router.navigate([''])
        },
        error: (err) => {
          var res = JSON.parse(err.error)
          console.log(res.message)
          this.snackBar.open(res.message, "Ok", {duration: 800});
      }
    });
    }
  }
 }

