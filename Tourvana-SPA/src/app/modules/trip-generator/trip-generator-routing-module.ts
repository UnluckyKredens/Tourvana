import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTripContainer } from './container/create-trip-container/create-trip-container';
import { TripGeneratorModule } from './trip-generator-module';

const routes: Routes = [
  {
    path: ':urlDestination',
    component: CreateTripContainer,
  },
  {
    path: '',
    component: CreateTripContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripGeneratorRoutingModule { }
