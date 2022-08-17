import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHeadRangeComponent } from './single-head-range.component';

describe('SingleHeadRangeComponent', () => {
  let component: SingleHeadRangeComponent;
  let fixture: ComponentFixture<SingleHeadRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHeadRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHeadRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
