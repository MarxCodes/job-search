import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JDesktopDetailComponent } from './j-desktop-detail.component';

describe('JDesktopDetailComponent', () => {
  let component: JDesktopDetailComponent;
  let fixture: ComponentFixture<JDesktopDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JDesktopDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JDesktopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
