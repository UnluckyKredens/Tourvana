import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTripsRoutingModule } from './my-trips-routing-module';
import { TripListContainer } from './container/trip-list-container/trip-list-container';
import { UpcommingTripsPresenter } from './presenter/upcomming-trips-presenter/upcomming-trips-presenter';
import { ActivityPresenter } from './presenter/activity-presenter/activity-presenter';
import { TripDetailsContainer } from './container/trip-details-container/trip-details-container';
import { MaterialModule } from '../../shared/shared.module';
import { ErrorPresenter } from '../../shared/presenters/error-presenter/error-presenter';


@NgModule({
  declarations: [
    TripListContainer,
    UpcommingTripsPresenter,
    ActivityPresenter,
    TripDetailsContainer,
  ],
  imports: [
    CommonModule,
    MyTripsRoutingModule,
    MaterialModule,
  ]
})
export class MyTripsModule { }
