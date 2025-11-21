import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripAttractionsPresenter } from './create-trip-attractions-presenter';

describe('CreateTripAttractionsPresenter', () => {
  let component: CreateTripAttractionsPresenter;
  let fixture: ComponentFixture<CreateTripAttractionsPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTripAttractionsPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripAttractionsPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
