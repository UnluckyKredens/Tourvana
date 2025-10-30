import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListContainer } from './articles-list-container';

describe('ArticlesListContainer', () => {
  let component: ArticlesListContainer;
  let fixture: ComponentFixture<ArticlesListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesListContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
