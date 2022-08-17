import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOptionButtonComponent } from './search-option-button.component';

describe('SearchOptionButtonComponent', () => {
  let component: SearchOptionButtonComponent;
  let fixture: ComponentFixture<SearchOptionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOptionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOptionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
