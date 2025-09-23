import { Component } from '@angular/core';
import { AttractionModel } from '../../../../../../shared/model/attraction.model';
import { TripService } from '../../../../services/trip-service';
import { StepService } from '../../../../services/step-service';

@Component({
  selector: 'app-attractions-presenter',
  standalone: false,
  templateUrl: './attractions-presenter.html',
  styleUrl: './attractions-presenter.scss'
})
export class AttractionsPresenter {
constructor(private tripService: TripService, private stepService: StepService) { }
 attractions: AttractionModel[] = [
  {name: 'a', description: 'vb', price: 200, url: '1'},
  {name: 'ab', description: 'vc', price: 200, url: '2'},
  {name: 'ac', description: 'vs', price: 200, url: '3'},
  {name: 'ad', description: 'va', price: 200, url: '4'},
  {name: 'ae', description: 've', price: 200, url: '5'},
  {name: 'af', description: 'vt', price: 200, url: '6'},
]

checkedUrls: AttractionModel[] = []

  ngOnInit(): void {
    const trip = this.tripService.getData();

    if (trip?.attractions?.length) {
      const selectedUrls = trip.attractions.map(a => a.url);

      this.checkedUrls = this.attractions.filter(attraction =>
        selectedUrls.includes(attraction.url)
      );
    }
    this.stepService.sendStatus(true)
  }

  ngOnDestroy(): void {
    this.setAttractions(this.checkedUrls);
  }

  isChecked(url: string): boolean {
    this.stepService.sendStatus(true)
    return this.checkedUrls.some(a => a.url === url);
  }

  toggleAttraction(attraction: AttractionModel, checked: boolean): void {
    if (checked) {
      this.checkedUrls.push(attraction);
    } else {
      this.checkedUrls = this.checkedUrls.filter(a => a.url !== attraction.url);
    }
  }

setAttractions(attractions: AttractionModel[]) {
  this.tripService.setAttractions(attractions)
  console.log(attractions)
}
}
