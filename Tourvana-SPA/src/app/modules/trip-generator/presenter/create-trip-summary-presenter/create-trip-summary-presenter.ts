import { Component, EventEmitter, input, Input, Output, SimpleChanges } from '@angular/core';
import { TripService } from '../../services/trip-service';
import { TripModel } from '../../../../shared/model/trip.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-trip-summary-presenter',
  standalone: false,
  templateUrl: './create-trip-summary-presenter.html',
  styleUrl: './create-trip-summary-presenter.scss'
})
export class CreateTripSummaryPresenter {

  @Output() summaryReady = new EventEmitter<FormGroup>()

  summary = new FormGroup({
  name: new FormControl('', Validators.required)
  })

  constructor(private tripService: TripService) {
     tripService.trip$.subscribe(t => {
      this.trip = t
    })
  }

  @Input() saveRequestTick: number | undefined
  trip: Partial<TripModel> | undefined

 ngOnInit(): void {
    this.summaryReady.emit(this.summary)
 }
}
