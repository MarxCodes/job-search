import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JItemComponent } from './j-item.component';

describe('JItemComponent', () => {
  let component: JItemComponent;
  let fixture: ComponentFixture<JItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
