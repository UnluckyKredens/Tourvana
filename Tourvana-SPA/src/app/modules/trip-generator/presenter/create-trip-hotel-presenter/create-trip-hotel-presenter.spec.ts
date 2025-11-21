import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripHotelPresenter } from './create-trip-hotel-presenter';

describe('CreateTripHotelPresenter', () => {
  let component: CreateTripHotelPresenter;
  let fixture: ComponentFixture<CreateTripHotelPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTripHotelPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripHotelPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
