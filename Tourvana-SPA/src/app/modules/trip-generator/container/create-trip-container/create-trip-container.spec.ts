import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripContainer } from './create-trip-container';

describe('CreateTripContainer', () => {
  let component: CreateTripContainer;
  let fixture: ComponentFixture<CreateTripContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTripContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
