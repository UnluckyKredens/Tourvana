import { MatCheckboxChange } from '@angular/material/checkbox';
import { HotelModel } from '../../../../shared/model/hotel.model';
import { TripModel } from '../../../../shared/model/trip.model';
import { TripService } from './../../services/trip-service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-create-trip-hotel-presenter',
  standalone: false,
  templateUrl: './create-trip-hotel-presenter.html',
  styleUrl: './create-trip-hotel-presenter.scss'
})
export class CreateTripHotelPresenter implements OnInit {

  defaultImagePath = 'images/Icons/no_photo.png'

  constructor(private tripService: TripService) {
    this.trip = this.tripService.trip$
  }
  @Input() saveRequestTick: number | undefined

  hotelList: HotelModel[] | undefined = undefined
  checkedHotelId: string | undefined
  trip: any
  ngOnInit(): void {
    this.trip.subscribe((t: any) => {
      if(t.destination) {
      this.checkedHotelId = t.hotel?.hotelId
      this.tripService.getHotelList(t.destination!).subscribe(h => {
            this.hotelList = [...h]
      })
      }
    })
  }

  onPhotoError(event: Event) {
    const img = event.target as HTMLImageElement;
    if(img.src === this.defaultImagePath) return;
    img.src = this.defaultImagePath
  }

  checkHotel(event: MatCheckboxChange, id: string) {
    this.checkedHotelId = id
    this.tripService.setHotel(this.hotelList?.find(id => id.hotelId == this.checkedHotelId)!)
  }
}
