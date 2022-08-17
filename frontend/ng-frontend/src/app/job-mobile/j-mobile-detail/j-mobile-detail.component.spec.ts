import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JMobileDetailComponent } from './j-mobile-detail.component';

describe('JMobileDetailComponent', () => {
  let component: JMobileDetailComponent;
  let fixture: ComponentFixture<JMobileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JMobileDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JMobileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
