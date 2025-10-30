import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPresenter } from './hotel-presenter';

describe('HotelPresenter', () => {
  let component: HotelPresenter;
  let fixture: ComponentFixture<HotelPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
