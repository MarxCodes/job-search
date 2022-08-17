import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiNavDrawerComponent } from './mi-nav-drawer.component';

describe('MiNavDrawerComponent', () => {
  let component: MiNavDrawerComponent;
  let fixture: ComponentFixture<MiNavDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiNavDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiNavDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
