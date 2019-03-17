import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMatchOverviewComponent } from './user-match-overview.component';

describe('UserMatchOverviewComponent', () => {
  let component: UserMatchOverviewComponent;
  let fixture: ComponentFixture<UserMatchOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMatchOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMatchOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
