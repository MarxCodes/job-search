import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoHeadRangeComponent } from './two-head-range.component';

describe('TwoHeadRangeComponent', () => {
  let component: TwoHeadRangeComponent;
  let fixture: ComponentFixture<TwoHeadRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoHeadRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoHeadRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
