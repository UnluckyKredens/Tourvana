import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../../shared/shared.module';
import { FormControl, FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-header-presenter',
  templateUrl: './landing-page-header-presenter.html',
  styleUrl: './landing-page-header-presenter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MaterialModule, FormsModule],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageHeaderPresenterComponent {

  constructor(private router: Router) {  }
  destination: string = ""

  search(): void {
   this.router.navigate(['/trip/generator/data/', this.destination])
  }
 }
