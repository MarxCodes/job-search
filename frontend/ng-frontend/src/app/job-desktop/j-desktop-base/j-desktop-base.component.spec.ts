import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JDesktopBaseComponent } from './j-desktop-base.component';

describe('JDesktopBaseComponent', () => {
  let component: JDesktopBaseComponent;
  let fixture: ComponentFixture<JDesktopBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JDesktopBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JDesktopBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
