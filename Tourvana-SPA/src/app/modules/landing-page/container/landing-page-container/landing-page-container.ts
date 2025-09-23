import { Component } from '@angular/core';
import { LandingPageHeaderPresenterComponent } from '../../presenter/landing-page-header-presenter/landing-page-header-presenter.component';
import { BenefitsPresenterComponent } from '../../presenter/benefits-presenter/benefits-presenter';
import { LandingPageArticlesPresenter } from '../../presenter/landing-page-articles-presenter/landing-page-articles-presenter';
import { Footer } from "../../../../core/layouts/footer/footer";

@Component({
  selector: 'app-landing-page-container',
  imports: [LandingPageHeaderPresenterComponent, BenefitsPresenterComponent, LandingPageArticlesPresenter, Footer],
  templateUrl: './landing-page-container.html',
  styleUrl: './landing-page-container.scss'
})
export class LandingPageContainer {

}
