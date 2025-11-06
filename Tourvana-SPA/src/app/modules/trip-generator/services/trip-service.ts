import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, empty, Subject } from 'rxjs';
import { TripModel } from '../../../shared/model/trip.model';
import { HotelModel } from '../../../shared/model/hotel.model';
import { AttractionModel } from '../../../shared/model/attraction.model';

@Injectable({ providedIn: 'root' })

export class TripService {

   TripModelSubject = new BehaviorSubject<Partial<TripModel>>({});
  formData$ = this.TripModelSubject.asObservable();

  setData(data: TripModel): void {
    this.TripModelSubject.next({...data})
  }
  getData(): TripModel {
    return this.TripModelSubject.getValue() as TripModel
  }
  // setHotel(data: HotelModel) {
  //   this.TripModelSubject.subscribe(h => {
  //     h.hotel = data
  //   })
  // }

  // setAttractions(data: AttractionModel[]) {
  //     const current = this.TripModelSubject.getValue();

  //     const incomingUrls = data.map(a => a.url);
  //     const currentUrls = current.attractions?.map(a => a.url) ?? [];
  //     const remaining = current.attractions?.filter(a => incomingUrls.includes(a.url)) ?? [];
  //     const newOnes = data.filter(a => !currentUrls.includes(a.url));
  //     const merged = [...remaining, ...newOnes];
  //     current.attractions = merged;
  //     this.TripModelSubject.next(current);
  // }

  clearData() {
    let data: TripModel
    this.TripModelSubject.complete()
  }

}
