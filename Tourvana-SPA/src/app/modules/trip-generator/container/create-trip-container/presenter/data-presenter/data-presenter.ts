import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {empty, Observable,  } from 'rxjs';
import { TripService } from '../../../../services/trip-service';
import { TripModel } from '../../../../../../shared/model/trip.model';
import { TransportEnum } from '../../../../../../shared/enums/transport.enum';
import { StepService } from '../../../../services/step-service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-data-presenter',
  standalone: false,
  templateUrl: './data-presenter.html',
  styleUrl: './data-presenter.scss'
})



export class DataPresenter {
  constructor(private router: ActivatedRoute, private tripService: TripService, private stepService: StepService ) {
        this.router.params.subscribe(data => {
      this.dataForm.controls['destination'].setValue(data['destination'])
    })
   }

  dataForm = new FormGroup({
    from: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    budget: new FormControl(1, Validators.min(1)),
    participants: new FormControl(1, Validators.min(1)),
    transport: new FormControl('bus', Validators.required)
  })
  readonly dateRange = new FormGroup({
    dateStart: new FormControl<Date | null>(today),
    dateEnd: new FormControl<Date | null>(today),
  });

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;


  // ngOnInit() {
  //   this.getInfo();
  //   this.validate();
  //  }


  // ngOnDestroy(): void {
  //   this.saveData()
  // }

  // validate(): void {
  //   this.stepService.validateStep$.subscribe(() => {
  //     const isValid = this.dataForm.valid && this.dateRange.valid && this.dateRange.value.dateEnd != this.dateRange.value.dateStart
  //     if(isValid) {
  //       const formData = {
  //         ...this.dataForm.value,
  //         ...this.dateRange.value
  //       };
  //       this.stepService.sendStatus(true)
  //       this.saveData();
  //     }else {
  //       this.stepService.sendStatus(false)
  //     }
  //   })
  // }

  // getInfo(): void {
  //   if(this.router.snapshot.params['destination']) {
  //     let url = this.router.snapshot.params['destination']
  //     this.dataForm.value.destination = url
  //   }else if(!this.dataForm.value.destination) {
  //     if(this.tripService.getData().destination != undefined) {
  //       let serviceData = this.tripService.getData();
  //         this.dataForm.setValue({
  //           from: serviceData.from,
  //           destination: serviceData.destination,
  //           budget: serviceData.budget,
  //           participants: serviceData.patricipants,
  //           transport: serviceData.transport
  //         })
  //         this.dateRange.setValue({
  //           dateStart: serviceData.dateRange.dateStart,
  //           dateEnd: serviceData.dateRange.dateEnd
  //         })
  //     }else {
  //       this.dataForm.reset();
  //     }


  //   }
  }
//   saveData(): void {
//     var data: TripModel = {
//       from: this.dataForm.value.from!,
//       destination: this.dataForm.value.destination!,
//       budget: this.dataForm.value.budget!,
//       patricipants: this.dataForm.value.participants!,
//       transport: this.dataForm.value.transport as TransportEnum,
//       dateRange: {
//         dateStart: this.dateRange.value.dateStart!,
//         dateEnd: this.dateRange.value.dateEnd!
//       },
//       hotel: undefined,
//       attractions: undefined
//     }

//     this.tripService.setData(data)
//   }
// }
