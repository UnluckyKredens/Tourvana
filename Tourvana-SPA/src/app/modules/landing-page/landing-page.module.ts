import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPageContainer } from './container/landing-page-container/landing-page-container';
import { LandingPageRouting } from './landing-page.routing';
import { LandingPageHeaderPresenterComponent } from "./presenter/landing-page-header-presenter/landing-page-header-presenter.component";
import { MaterialModule } from '../../shared/shared.module';
import { LandingPageArticlesPresenter } from './presenter/landing-page-articles-presenter/landing-page-articles-presenter';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ],
  imports: [
  MaterialModule,
    RouterModule,
    CommonModule,
    LandingPageRouting,  
    LandingPageContainer,
    FormsModule
],
  exports: []
})
export class LandingPageModule { }