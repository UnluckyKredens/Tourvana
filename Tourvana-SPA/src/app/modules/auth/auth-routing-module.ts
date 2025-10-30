import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './container/login-container/login-container';
import { RegisterContainer } from './container/register-container/register-container';

const routes: Routes = [
  {
    path: '',
    component: LoginContainer
  },
  {
    path: 'register',
    component: RegisterContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
