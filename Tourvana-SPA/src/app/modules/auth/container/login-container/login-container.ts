import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login-container',
  standalone: false,
  templateUrl: './login-container.html',
  styleUrl: './login-container.scss'
})
export class LoginContainer {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
}
}
