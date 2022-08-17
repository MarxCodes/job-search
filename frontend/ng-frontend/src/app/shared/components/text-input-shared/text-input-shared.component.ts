import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'crapp-text-input',
  templateUrl: './text-input-shared.component.html',
  styleUrls: ['./text-input-shared.component.scss']
})
export class TextInputSharedComponent implements OnInit {
  @Output() itemChange = new EventEmitter<number>();
  @Input() item! : number;

  constructor() {}

  ngOnInit() {}
  updateVal($event: Event) {
    console.log(this.item);

    this.itemChange.emit(this.item);
  }
}
