import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripGeneratorRoutingModule } from './trip-generator-routing-module';
import { CreateTripContainer } from './container/create-trip-container/create-trip-container';
import { DataPresenter } from './container/create-trip-container/presenter/data-presenter/data-presenter';
import { MaterialModule } from '../../shared/shared.module';
import { NavigationBar } from "../../core/layouts/navigation-bar/navigation-bar";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelPresenter } from './container/create-trip-container/presenter/hotel-presenter/hotel-presenter';
import { AttractionsPresenter } from './container/create-trip-container/presenter/attractions-presenter/attractions-presenter';
import { SummaryPresenter } from './container/create-trip-container/presenter/summary-presenter/summary-presenter';


@NgModule({
  declarations: [
    CreateTripContainer,
    DataPresenter,
    HotelPresenter,
    AttractionsPresenter,
    SummaryPresenter
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
