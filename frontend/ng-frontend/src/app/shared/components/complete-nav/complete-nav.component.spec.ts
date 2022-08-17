import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteNavComponent } from './complete-nav.component';

describe('CompleteNavComponent', () => {
  let component: CompleteNavComponent;
  let fixture: ComponentFixture<CompleteNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
