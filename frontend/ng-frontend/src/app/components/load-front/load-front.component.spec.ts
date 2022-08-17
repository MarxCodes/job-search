import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFrontComponent } from './load-front.component';

describe('LoadFrontComponent', () => {
  let component: LoadFrontComponent;
  let fixture: ComponentFixture<LoadFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
