import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JDetailComponent } from './j-detail.component';

describe('JDetailComponent', () => {
  let component: JDetailComponent;
  let fixture: ComponentFixture<JDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
