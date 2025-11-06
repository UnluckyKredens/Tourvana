import { MyTripsService } from './../../services/my-trips.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { TripModel } from '../../../../shared/model/trip.model';

@Component({
  selector: 'app-trip-details-container',
  standalone: false,
  templateUrl: './trip-details-container.html',
  styleUrl: './trip-details-container.scss',
})
export class TripDetailsContainer {
  constructor(private router: ActivatedRoute, private readonly myTripsService: MyTripsService) {
    this.tripId = this.router.snapshot.paramMap.get('id')
  }

  trip: TripModel | undefined
  tripdays: Date | undefined
  tripId: string | null = null
  ngOnInit(): void {
    this.getTripDetails()
  }


  getTripDetails() {
    if(this.tripId) {
    this.myTripsService.getOneTrip(this.tripId).subscribe(trip => {
      this.trip = trip

      console.log(trip)
    })
    }
  }
}
