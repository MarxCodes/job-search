import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JMobileBaseComponent } from './j-mobile-base.component';

describe('JMobileBaseComponent', () => {
  let component: JMobileBaseComponent;
  let fixture: ComponentFixture<JMobileBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JMobileBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JMobileBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
