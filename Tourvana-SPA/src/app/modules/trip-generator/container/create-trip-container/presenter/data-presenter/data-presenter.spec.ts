import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPresenter } from './data-presenter';

describe('DataPresenter', () => {
  let component: DataPresenter;
  let fixture: ComponentFixture<DataPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
