import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageArticlesPresenter } from './landing-page-articles-presenter';

describe('LandingPageArticlesPresenter', () => {
  let component: LandingPageArticlesPresenter;
  let fixture: ComponentFixture<LandingPageArticlesPresenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageArticlesPresenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageArticlesPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
