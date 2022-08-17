import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-option-button',
  templateUrl: './search-option-button.component.html',
  styleUrls: ['./search-option-button.component.scss']
})
export class SearchOptionButtonComponent implements OnInit {
  @Output() searchBtnClicked = new EventEmitter<void>();
  @Input() name! : string;
  constructor() { }

  ngOnInit(): void {
  }
  toggleOptions() {
    this.searchBtnClicked.emit();
  }
}
