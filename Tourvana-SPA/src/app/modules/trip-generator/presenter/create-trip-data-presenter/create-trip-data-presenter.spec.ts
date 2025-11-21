import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripDataPresenter } from './create-trip-data-presenter';

describe('CreateTripDataPresenter', () => {
  let component: CreateTripDataPresenter;
  let fixture: ComponentFixture<CreateTripDataPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTripDataPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripDataPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
