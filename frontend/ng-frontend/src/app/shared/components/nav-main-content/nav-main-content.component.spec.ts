import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMainContentComponent } from './nav-main-content.component';

describe('NavMainContentComponent', () => {
  let component: NavMainContentComponent;
  let fixture: ComponentFixture<NavMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
