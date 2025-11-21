import { AuthService } from './../../../auth/services/auth.service';
import { L } from '@angular/cdk/keycodes';
import { Component, inject, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from '../../services/trip-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TripModel } from '../../../../shared/model/trip.model';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tick } from '@angular/core/testing';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-create-trip-container',
  standalone: false,
  templateUrl: './create-trip-container.html',
  styleUrl: './create-trip-container.scss'
})
export class CreateTripContainer {

  constructor(private tripService: TripService, private router: Router) {
    tripService.trip$.subscribe(t => {
      this.trip = t
    })
  }

  @Output() tripForm = new FormGroup({})
  @Output() summaryForm = new FormGroup({})
  trip: Partial<TripModel> | undefined
  summary: Partial<TripModel> | undefined
  saveTick: number = 0

    ngOnInit(): void {

  }

  onTripFormReady(form: FormGroup) {
    this.tripForm = form
    }

  onSummaryFormReady(form: FormGroup) {
    this.summaryForm = form
  }

  next() {
    this.saveTick++
  }

  back() {
    this.saveTick--
  }

  saveTrip(summaryForm: FormGroup) {
    var body: Partial<TripModel> = {...this.trip, name: summaryForm.value.name}
    this.tripService.saveTrip(body).subscribe({next: (res: any) => {
      this.router.navigate([`/trips/details/${res.id}`])
    }})
  }

  clearData() {
    this.tripService.clearData();
    this.saveTick--;
  }
}

