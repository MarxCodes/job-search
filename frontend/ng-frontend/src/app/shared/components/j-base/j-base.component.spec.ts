import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JBaseComponent } from './j-base.component';

describe('JBaseComponent', () => {
  let component: JBaseComponent;
  let fixture: ComponentFixture<JBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
