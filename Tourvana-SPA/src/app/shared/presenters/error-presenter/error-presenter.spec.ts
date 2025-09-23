import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPresenter } from './error-presenter';

describe('ErrorPresenter', () => {
  let component: ErrorPresenter;
  let fixture: ComponentFixture<ErrorPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
