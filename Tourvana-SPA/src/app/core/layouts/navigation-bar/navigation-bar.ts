import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/shared.module';
import { Router, RouterLink } from '@angular/router';
import { App } from '../../../app';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})
export class NavigationBar {
  constructor(private router: Router) {}
  userToken = localStorage.getItem('userToken')
  menuOpen = false;
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goToAbout() {
  this.router.navigate(['/']).then(() => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

  logout() {
    localStorage.clear()
    window.location.reload()
  }
}
