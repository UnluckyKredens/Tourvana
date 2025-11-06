import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from '../../../core/http/apiEndpoint';
import { Observable } from 'rxjs';
import { MyTripDto } from '../../../shared/dtos/myTripDto';
import { TripModel } from '../../../shared/model/trip.model';

@Injectable({
  providedIn: 'root'
})
export class MyTripsService {

  constructor(private readonly http: HttpClient) { }

  getMyTrips(): Observable<MyTripDto[]> {
    return this.http.get<MyTripDto[]>(`${apiEndpoint.user.upcommingtrips}`)
  }

  getOneTrip(tripId: string): Observable<TripModel> {
    console.log(apiEndpoint.trip.getTripById + tripId)
    return this.http.get<TripModel>(apiEndpoint.trip.getTripById + tripId)
  }
}
