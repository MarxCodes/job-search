import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropTestComponent } from './drop-test.component';

describe('DropTestComponent', () => {
  let component: DropTestComponent;
  let fixture: ComponentFixture<DropTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
