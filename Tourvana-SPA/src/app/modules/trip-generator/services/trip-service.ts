import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, empty, Observable, Subject } from 'rxjs';
import { TripModel } from '../../../shared/model/trip.model';
import { HotelModel } from '../../../shared/model/hotel.model';
import { AttractionModel } from '../../../shared/model/attraction.model';
import { apiEndpoint } from '../../../core/http/apiEndpoint';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { P } from '@angular/cdk/keycodes';
import { City } from '../../../shared/model/city.model';
import * as citiesJSON  from '../../../../../public/json/cities.json'

@Injectable({ providedIn: 'root' })
export class TripService {

  constructor(private http: HttpClient) {}

  trip: TripModel = {
    name: '',
    from: '',
    destination: '',
    startDate: new Date,
    endDate: new Date,
    budget: 0,
    transport: '',
    totalPayments: 0,
    hotel: undefined,
    notes: '',
    attractions: [],
    payments: [],
    contributors: []
  }

   TripModelSubject = new BehaviorSubject<Partial<TripModel>>(this.trip);
  trip$ = this.TripModelSubject.asObservable();

  setData(data: Partial<TripModel>): void {
    var snapshot = this.getData()
    this.TripModelSubject.next({...snapshot, ...data})
  }
  getData(): TripModel {
    return this.TripModelSubject.getValue() as TripModel
  }

  getCities(): City[] {
    return citiesJSON.cities
  }

  clearData() {
    this.TripModelSubject.next({...this.trip, attractions: []})
  }

  setAttraction(data: AttractionModel) {
    this.TripModelSubject.value.attractions?.push(data)
  }
  unsetAttraction(data: AttractionModel) {
      let index = this.TripModelSubject.value.attractions!.findIndex(d => d == data)
      this.TripModelSubject.value.attractions!.splice(index, 1)
  }

  getHotelList(destination: string):Observable<HotelModel[]> {
    return this.http.get<HotelModel[]>(apiEndpoint.hotel.getHotelsTo + destination)
  }
  setHotel(data: HotelModel) {
    var state = this.TripModelSubject.getValue()
    state.hotel = data
    this.TripModelSubject.next({...state})
  }

  getAttractions(destination: string): Observable<AttractionModel[]> {
    return this.http.get<AttractionModel[]>(apiEndpoint.attraction.getAttractionsTo +  destination)
  }

  saveTrip(trip: Partial<TripModel>) {
    return this.http.post(apiEndpoint.trip.saveTrip, trip)
  }


}
