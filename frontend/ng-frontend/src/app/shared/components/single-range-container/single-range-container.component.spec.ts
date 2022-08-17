import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRangeContainerComponent } from './single-range-container.component';

describe('SingleRangeContainerComponent', () => {
  let component: SingleRangeContainerComponent;
  let fixture: ComponentFixture<SingleRangeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRangeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRangeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
