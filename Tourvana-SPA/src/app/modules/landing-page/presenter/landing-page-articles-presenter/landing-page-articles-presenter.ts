import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-landing-page-articles-presenter',
  templateUrl: './landing-page-articles-presenter.html',
  styleUrl: './landing-page-articles-presenter.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MaterialModule, FormsModule],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageArticlesPresenter {

}
