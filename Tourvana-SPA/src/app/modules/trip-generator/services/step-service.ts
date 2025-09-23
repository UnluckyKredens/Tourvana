import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StepService {
      
    private validateStepSubject = new Subject<void>();
    validateStep$ = this.validateStepSubject.asObservable();

    private formStatusSubject = new Subject<{ valid: boolean, data?: any }>();
    formStatus$ = this.formStatusSubject.asObservable();

    requestValidation() {
         this.validateStepSubject.next()
    }

    sendStatus(valid: boolean, data?: any) {
        this.formStatusSubject.next({valid, data})

    }
    
}