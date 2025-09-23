import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
  animations: [
    trigger('routeFadeAnimation', [
      transition('* <=> *', [
        style({opacity: 0}), animate('800ms ease-in-out', style({opacity: 1}))
      ])
    ])
  ]
})
export class App {
  protected title = 'Tourvana-SPA';
  userToken: number | undefined = undefined

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
}
}
