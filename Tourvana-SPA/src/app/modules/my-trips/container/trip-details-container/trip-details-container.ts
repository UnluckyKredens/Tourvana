import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-trip-details-container',
  standalone: false,
  templateUrl: './trip-details-container.html',
  styleUrl: './trip-details-container.scss',
})
export class TripDetailsContainer {
NaN: any;
  constructor(private router: ActivatedRoute) {
    this.tripId = Number(this.router.snapshot.paramMap.get('id'))

  }

  tripId: number | null = null
  ngOnInit(): void {
    if(isNaN(Number(this.tripId))) {
      this.tripId = null
    }
    console.log(this.tripId)
  }
}
