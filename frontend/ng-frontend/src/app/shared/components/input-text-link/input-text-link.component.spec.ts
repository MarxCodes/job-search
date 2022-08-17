import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextLinkComponent } from './input-text-link.component';

describe('InputTextLinkComponent', () => {
  let component: InputTextLinkComponent;
  let fixture: ComponentFixture<InputTextLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
