import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelOptionsComponent } from './search-panel-options.component';

describe('SearchPanelOptionsComponent', () => {
  let component: SearchPanelOptionsComponent;
  let fixture: ComponentFixture<SearchPanelOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPanelOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
