import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConsoleComponent } from './search-console.component';

describe('SearchConsoleComponent', () => {
  let component: SearchConsoleComponent;
  let fixture: ComponentFixture<SearchConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
