import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPresenter } from './summary-presenter';

describe('SummaryPresenter', () => {
  let component: SummaryPresenter;
  let fixture: ComponentFixture<SummaryPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
