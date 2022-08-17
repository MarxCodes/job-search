import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiNavContentComponent } from './mi-nav-content.component';

describe('MiNavContentComponent', () => {
  let component: MiNavContentComponent;
  let fixture: ComponentFixture<MiNavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiNavContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
