import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsPresenter } from './attractions-presenter';

describe('AttractionsPresenter', () => {
  let component: AttractionsPresenter;
  let fixture: ComponentFixture<AttractionsPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttractionsPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttractionsPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
