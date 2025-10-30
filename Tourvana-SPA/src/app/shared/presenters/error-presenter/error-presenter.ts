import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from "../../../app-routing-module";
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-presenter',
  standalone: false,
  templateUrl: './error-presenter.html',
  styleUrl: './error-presenter.scss',
})
export class ErrorPresenter {
constructor(private router: Router) {}
  goToStart() {
    this.router.navigate(['/']);
  }
}
