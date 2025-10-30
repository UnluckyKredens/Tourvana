import { Component } from '@angular/core';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavigationBar, RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
