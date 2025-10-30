import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelContainer } from './user-panel-container';

describe('UserPanelContainer', () => {
  let component: UserPanelContainer;
  let fixture: ComponentFixture<UserPanelContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPanelContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPanelContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
