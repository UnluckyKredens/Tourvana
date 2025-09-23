import { Component } from '@angular/core';

@Component({
  selector: 'app-user-panel-container',
  standalone: false,
  templateUrl: './user-panel-container.html',
  styleUrl: './user-panel-container.scss'
})
export class UserPanelContainer {
  trips: boolean = true
  stats: boolean = false
}
