import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripSummaryPresenter } from './create-trip-summary-presenter';

describe('CreateTripSummaryPresenter', () => {
  let component: CreateTripSummaryPresenter;
  let fixture: ComponentFixture<CreateTripSummaryPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTripSummaryPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripSummaryPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
