import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPracticeComponent } from './search-practice.component';

describe('SearchPracticeComponent', () => {
  let component: SearchPracticeComponent;
  let fixture: ComponentFixture<SearchPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
