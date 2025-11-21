import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TripService } from '../../services/trip-service';
import { TripModel } from '../../../../shared/model/trip.model';
import { AttractionModel } from '../../../../shared/model/attraction.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-create-trip-attractions-presenter',
  standalone: false,
  templateUrl: './create-trip-attractions-presenter.html',
  styleUrl: './create-trip-attractions-presenter.scss'
})
export class CreateTripAttractionsPresenter implements OnInit {
  constructor(private tripService: TripService) {
    this.trip = tripService.trip$
  }
  @Input() saveRequestTick: number | undefined
  trip: any
  attractionList: AttractionModel[] = []
  getAttractions(destination: string) {
    this.tripService.getAttractions(destination).subscribe(a => {
      this.attractionList = [...a]
    })
  }

  ngOnInit(): void {
    this.trip.subscribe((t: any) => {
      if(t.destination) {
      this.getAttractions(t.destination)
      }
    })
  }

  checkAttraction(event: MatCheckboxChange, attraction: AttractionModel) {
    if(event.checked) {
      this.tripService.setAttraction(attraction)
    }else {
      this.tripService.unsetAttraction(attraction)
    }
  }
}
