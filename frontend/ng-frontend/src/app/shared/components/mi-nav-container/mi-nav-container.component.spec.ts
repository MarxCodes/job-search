import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiNavContainerComponent } from './mi-nav-container.component';

describe('MiNavContainerComponent', () => {
  let component: MiNavContainerComponent;
  let fixture: ComponentFixture<MiNavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiNavContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
