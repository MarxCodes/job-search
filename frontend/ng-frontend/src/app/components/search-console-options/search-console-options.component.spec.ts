import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConsoleOptionsComponent } from './search-console-options.component';

describe('SearchConsoleOptionsComponent', () => {
  let component: SearchConsoleOptionsComponent;
  let fixture: ComponentFixture<SearchConsoleOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchConsoleOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConsoleOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
