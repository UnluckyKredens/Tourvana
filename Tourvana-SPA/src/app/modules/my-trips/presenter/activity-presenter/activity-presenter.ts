import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-presenter',
  standalone: false,
  templateUrl: './activity-presenter.html',
  styleUrl: './activity-presenter.scss'
})
export class ActivityPresenter {
  activity: boolean | undefined
}
