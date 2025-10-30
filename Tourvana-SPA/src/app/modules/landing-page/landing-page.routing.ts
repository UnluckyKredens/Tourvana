import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LandingPageContainer } from './container/landing-page-container/landing-page-container';

const routes: Routes = [
  {
    path: '',
    component: LandingPageContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRouting { }
