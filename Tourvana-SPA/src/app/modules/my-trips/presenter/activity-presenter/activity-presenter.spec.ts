import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPresenter } from './activity-presenter';

describe('ActivityPresenter', () => {
  let component: ActivityPresenter;
  let fixture: ComponentFixture<ActivityPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
