import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import { LoginContainer } from './modules/auth/container/login-container/login-container';
import { RegisterContainer } from './modules/auth/container/register-container/register-container';
import { CreateTripContainer } from './modules/trip-generator/container/create-trip-container/create-trip-container';
import { P } from '@angular/cdk/keycodes';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    data: {animation: 'home'},
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule),

      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user-module').then(u => u.UserModule)
      },
      {
        path: 'trips',
        loadChildren: () => import("./modules/my-trips/my-trips-module").then(t => t.MyTripsModule),
        canActivate: [authGuard]
      },
      {
        path: 'articles',
        loadChildren: () => import("./modules/articles/articles-module").then(a => a.ArticlesModule)
      }
    ]
  },
  {
    path: 'auth',
    data: {animation: 'auth'},
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/auth/auth-module').then(a => a.AuthModule),
      }
    ]
  },
  {
    path: 'trip',
    component: CreateTripContainer,
    data: {animation: 'trip'},
    children: [
      {
        path: 'generator',
        loadChildren: () => import("./modules/trip-generator/trip-generator-module").then(t => t.TripGeneratorModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
