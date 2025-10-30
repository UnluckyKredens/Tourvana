import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelContainer } from './user-panel/container/user-panel-container/user-panel-container';

const routes: Routes = [
  {
    path: '',
    component: UserPanelContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
