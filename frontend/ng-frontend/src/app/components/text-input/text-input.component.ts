import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Output() itemChange = new EventEmitter<number>();
  @Input() item! : number;

  constructor() {}

  ngOnInit() {}
  updateVal($event: Event) {
    console.log(this.item);

    this.itemChange.emit(this.item);
  }
}
