import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRangeComponent } from './single-range.component';

describe('SingleRangeComponent', () => {
  let component: SingleRangeComponent;
  let fixture: ComponentFixture<SingleRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
