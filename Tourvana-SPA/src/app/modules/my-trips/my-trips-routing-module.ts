import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListContainer } from './container/trip-list-container/trip-list-container';
import { TripDetailsContainer } from './container/trip-details-container/trip-details-container';

const routes: Routes = [
  {
    path: '',
    component: TripListContainer
  },
  {
    path: 'details/:id',
    component: TripDetailsContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTripsRoutingModule { }
