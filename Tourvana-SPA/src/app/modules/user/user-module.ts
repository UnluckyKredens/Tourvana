import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { UserPanelContainer } from './user-panel/container/user-panel-container/user-panel-container';


@NgModule({
  declarations: [
    UserPanelContainer
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
