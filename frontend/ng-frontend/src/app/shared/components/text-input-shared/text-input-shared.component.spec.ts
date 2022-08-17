import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputSharedComponent } from './text-input-shared.component';

describe('TextInputComponent', () => {
  let component: TextInputSharedComponent;
  let fixture: ComponentFixture<TextInputSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
