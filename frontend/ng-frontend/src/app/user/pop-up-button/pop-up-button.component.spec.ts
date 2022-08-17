import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpButtonComponent } from './pop-up-button.component';

describe('PopUpButtonComponent', () => {
  let component: PopUpButtonComponent;
  let fixture: ComponentFixture<PopUpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
