import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDetailsContainer } from './trip-details-container';

describe('TripDetailsContainer', () => {
  let component: TripDetailsContainer;
  let fixture: ComponentFixture<TripDetailsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripDetailsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripDetailsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
