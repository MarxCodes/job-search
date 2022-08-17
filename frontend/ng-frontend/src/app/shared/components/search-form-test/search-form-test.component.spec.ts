import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormTestComponent } from './search-form-test.component';

describe('SearchFormTestComponent', () => {
  let component: SearchFormTestComponent;
  let fixture: ComponentFixture<SearchFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
