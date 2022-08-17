import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualHeadRangeComponent } from './dual-head-range.component';

describe('DualHeadRangeComponent', () => {
  let component: DualHeadRangeComponent;
  let fixture: ComponentFixture<DualHeadRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualHeadRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualHeadRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
