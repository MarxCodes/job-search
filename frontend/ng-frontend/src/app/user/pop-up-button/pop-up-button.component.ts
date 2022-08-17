import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-button',
  templateUrl: './pop-up-button.component.html',
  styleUrls: ['./pop-up-button.component.scss']
})
export class PopUpButtonComponent  {
  @Output() infoButtonClicked = new EventEmitter<void>();
  @Input() name! : string;
  constructor() { }

  toggleInfo() {
    this.infoButtonClicked.emit();
  }
}
