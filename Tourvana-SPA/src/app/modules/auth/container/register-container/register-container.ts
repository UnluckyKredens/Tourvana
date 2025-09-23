import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../../../shared/shared.module';
import { NavigationBar } from '../../../../core/layouts/navigation-bar/navigation-bar';
import { AppModule } from '../../../../app-module';

@Component({
  selector: 'app-register-container',
  standalone: false,
  templateUrl: './register-container.html',
  styleUrl: './register-container.scss'
})
export class RegisterContainer {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
}
}
