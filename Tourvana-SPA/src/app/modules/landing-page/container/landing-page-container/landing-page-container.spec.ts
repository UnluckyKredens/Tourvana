import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageContainer } from './landing-page-container';

describe('LandingPageContainer', () => {
  let component: LandingPageContainer;
  let fixture: ComponentFixture<LandingPageContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
