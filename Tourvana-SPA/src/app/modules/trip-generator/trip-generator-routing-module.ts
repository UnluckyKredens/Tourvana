import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTripContainer } from './container/create-trip-container/create-trip-container';
import { DataPresenter } from './presenter/data-presenter/data-presenter';
import { HotelPresenter } from './presenter/hotel-presenter/hotel-presenter';
import { AttractionsPresenter } from './presenter/attractions-presenter/attractions-presenter';
import { SummaryPresenter } from './presenter/summary-presenter/summary-presenter';

const routes: Routes = [
  {
    path: '*',
    redirectTo: "data"
  },
  {
    path: 'data/:destination',
    component: DataPresenter
  },
  {
    path: 'data',
    component: DataPresenter
  },
  {
    path: 'hotel',
    component: HotelPresenter
  },
    {
    path: 'attractions',
    component: AttractionsPresenter
  },
    {
    path: 'summary',
    component: SummaryPresenter
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripGeneratorRoutingModule { }
