import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxReuseComponent } from './checkbox-reuse.component';

describe('CheckboxReuseComponent', () => {
  let component: CheckboxReuseComponent;
  let fixture: ComponentFixture<CheckboxReuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxReuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
