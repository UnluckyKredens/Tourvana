import { Component } from '@angular/core';
import { TripModel } from '../../../../shared/model/trip.model';
import { HotelModel } from '../../../../shared/model/hotel.model';
import { TripService } from '../../services/trip-service';
import { StepService } from '../../services/step-service';

@Component({
  selector: 'app-hotel-presenter',
  standalone: false,
  templateUrl: './hotel-presenter.html',
  styleUrl: './hotel-presenter.scss'
})
export class HotelPresenter {

  constructor(private tripService: TripService, private stepService: StepService) {  }
  hotels: HotelModel[] = [
    { hotelId: "s", name: "sdf", url: "ssdf", price: 0},
     { hotelId: "s",name: "asd", url: "s sddf", price: 10},
     { hotelId: "s", name: "asdf", url: "s sdf6", price: 10},
     { hotelId: "s", name: "zxcv", url: "s sdqf", price: 10},
     { hotelId: "s", name: "qwer", url: "s sdrfe", price: 10},
     { hotelId: "s", name: "qwe", url: "s sdrf", price: 10}
    ]
  trip: TripModel | undefined
  selected: number | undefined

  // ngOnInit(): void {
  //   this.trip = this.tripService.getData()
  //   if(this.trip?.hotel?.name) {
  //     // let foundHotel = this.hotels.findIndex(h => h.url == this.trip?.hotel?.url)
  //     this.selected = foundHotel
  //   }
  //   this.stepService.sendStatus(true)
  // }

  ngOnDestroy(): void {
    this.setHotel();
  }

  setHotel() {
    // this.tripService.setHotel(this.hotels[this.selected!])
  }
}
