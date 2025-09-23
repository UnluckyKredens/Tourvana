import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListContainer } from './trip-list-container';

describe('TripListContainer', () => {
  let component: TripListContainer;
  let fixture: ComponentFixture<TripListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripListContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
