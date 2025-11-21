import { TripService } from './../../services/trip-service';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, from, map, Observable, startWith } from 'rxjs';
import { TripModel } from '../../../../shared/model/trip.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { C } from '@angular/cdk/keycodes';
import { City } from '../../../../shared/model/city.model';

@Component({
  selector: 'app-create-trip-data-presenter',
  standalone: false,
  templateUrl: './create-trip-data-presenter.html',
  styleUrl: './create-trip-data-presenter.scss'
})
export class CreateTripDataPresenter {

  constructor(private url: ActivatedRoute, private tripService: TripService) {
  }

  @Output() formReady = new EventEmitter<FormGroup>()
  @Input() saveRequestTick?: number = 0
  urlDestination: string | null = '';
  tripForm = new FormGroup({
    from: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    startDate: new FormControl(new Date, Validators.required),
    endDate: new FormControl(new Date, Validators.required),
    budget: new FormControl(0, Validators.min(100)),
    transport: new FormControl('other', Validators.required)
  }, {validators: (v) => v.get('startDate')?.value >= v.get('endDate')?.value ? {invalidDate: true} : null})

  cities: City[] = []

  filteredCities$: Observable<City[]> | undefined

  ngOnInit(): void {
    this.urlDestination = this.url.snapshot.params['urlDestination'] ?? ''
    this.tripForm.controls['destination'].setValue(this.urlDestination)
    this.formReady.emit(this.tripForm)
    this.tripForm.controls['startDate'].hasError('invalidDate')

    this.cities = this.tripService.getCities()
    this.filteredCities$ = this.tripForm.controls['destination'].valueChanges.pipe(
        startWith(this.tripForm.controls['destination'].value ?? ''),
        map((val) => this._filter(val ?? '')),
      );
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['saveRequestTick'] && !changes['saveRequestTick'].firstChange) {
      if(this.tripForm.valid){
      this.tripService.setData({
        from: this.tripForm.value.from!,
        destination: this.tripForm.value.destination!,
        startDate: this.tripForm.value.startDate!,
        endDate: this.tripForm.value.endDate!,
        budget: this.tripForm.value.budget!,
        transport: this.tripForm.value.transport!,
      })
      }
    }
  }


 _filter(val: string): City[] {
  const value = val.toLowerCase();
  var list = this.cities.filter(city => city.name.toLowerCase().includes(value));
  return list
 }
}
