import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingTripsPresenter } from './upcomming-trips-presenter';

describe('UpcommingTripsPresenter', () => {
  let component: UpcommingTripsPresenter;
  let fixture: ComponentFixture<UpcommingTripsPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcommingTripsPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcommingTripsPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
