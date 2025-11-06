import { Component } from '@angular/core';
import { MyTripsService } from '../../services/my-trips.service';
import { MyTripDto } from '../../../../shared/dtos/myTripDto';

@Component({
  selector: 'app-upcomming-trips-presenter',
  standalone: false,
  templateUrl: './upcomming-trips-presenter.html',
  styleUrl: './upcomming-trips-presenter.scss'
})
export class UpcommingTripsPresenter {

  upcommingTrips: MyTripDto[] = []

  constructor(private myTripsService: MyTripsService) {}

  ngOnInit(): void {
    this.getMyTrips()
  }

  getMyTrips() {
    this.myTripsService.getMyTrips().subscribe({
      next: (trips) => {
      this.upcommingTrips = trips
      console.log(this.upcommingTrips)
    },
    error: err => {}
  })
  }
}
