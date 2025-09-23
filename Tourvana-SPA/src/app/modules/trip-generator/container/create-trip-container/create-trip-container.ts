import { L } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../../services/trip-service';
import { StepService } from '../../services/step-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-trip-container',
  standalone: false,
  templateUrl: './create-trip-container.html',
  styleUrl: './create-trip-container.scss'
})
export class CreateTripContainer {

  constructor(private router: Router, private tripService: TripService, private stepService: StepService ) {  }
    
    stepRoutes = ['data', 'hotel', 'attractions', 'summary']
    private snackbar = inject(MatSnackBar);

    waitingForValidation = false;


    ngOnInit(): void {

    }

    nextStep(): void {
      const step = this.stepRoutes.indexOf(window.location.pathname.split('/')[3]) 
      //TODO: VALIDACJA
      console.log(step)
                this.router.navigate(['/trip/generator/' + this.stepRoutes[step+1]])
    }

    prevStep(): void {
      const step = this.stepRoutes.indexOf(window.location.pathname.split('/')[3]) 
      this.router.navigate(['/trip/generator/' + this.stepRoutes[step-1]])
      }
    }
