import { Component } from '@angular/core';
import { TripService } from '../../../../services/trip-service';
import { TripModel } from '../../../../../../shared/model/trip.model';

@Component({
  selector: 'app-summary-presenter',
  standalone: false,
  templateUrl: './summary-presenter.html',
  styleUrl: './summary-presenter.scss'
})
export class SummaryPresenter {

  constructor(private tripService: TripService) {}
  trip: TripModel | undefined

  ngOnInit(): void {
    this.trip = this.tripService.getData()
    console.log(this.trip)
  }

    removeAttraction(url: string): void {
    const current = this.tripService.TripModelSubject.getValue();

    // if (!current.attractions?.length) return;

    // current.attractions = current.attractions.filter(a => a.url !== url);

    this.tripService.TripModelSubject.next(current);
  }

  removeHotel() {
    this.tripService.TripModelSubject.subscribe(t => {
      // t.hotel = undefined
    })
    this.trip = this.tripService.getData()
  }

  clearData() {
    this.tripService.clearData();
  }
}
