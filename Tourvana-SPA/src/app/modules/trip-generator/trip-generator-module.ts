import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripGeneratorRoutingModule } from './trip-generator-routing-module';
import { CreateTripContainer } from './container/create-trip-container/create-trip-container';
import { MaterialModule } from '../../shared/shared.module';
import { NavigationBar } from "../../core/layouts/navigation-bar/navigation-bar";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTripDataPresenter } from './presenter/create-trip-data-presenter/create-trip-data-presenter';
import { CreateTripHotelPresenter } from './presenter/create-trip-hotel-presenter/create-trip-hotel-presenter';
import { CreateTripAttractionsPresenter } from './presenter/create-trip-attractions-presenter/create-trip-attractions-presenter';
import { CreateTripSummaryPresenter } from './presenter/create-trip-summary-presenter/create-trip-summary-presenter';



@NgModule({
  declarations: [
    CreateTripContainer,
    CreateTripDataPresenter,
    CreateTripHotelPresenter,
    CreateTripAttractionsPresenter,
    CreateTripSummaryPresenter,
  ],
  imports: [
    CommonModule,
    TripGeneratorRoutingModule,
    MaterialModule,
    NavigationBar,
    FormsModule,
    ReactiveFormsModule
]
})
export class TripGeneratorModule { }
