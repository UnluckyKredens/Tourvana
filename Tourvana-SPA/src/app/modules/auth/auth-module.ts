import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { LoginContainer } from './container/login-container/login-container';
import { RegisterContainer } from './container/register-container/register-container';
import { MaterialModule } from '../../shared/shared.module';
import { NavigationBar } from '../../core/layouts/navigation-bar/navigation-bar';


@NgModule({
  declarations: [
    LoginContainer,
    RegisterContainer,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    NavigationBar
  ]
})
export class AuthModule { }
