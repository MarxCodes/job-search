import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JListComponent } from './j-list.component';

describe('JListComponent', () => {
  let component: JListComponent;
  let fixture: ComponentFixture<JListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
