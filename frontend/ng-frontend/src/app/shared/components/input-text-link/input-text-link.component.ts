import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text-link',
  templateUrl: './input-text-link.component.html',
  styleUrls: ['./input-text-link.component.scss']
})
export class InputTextLinkComponent implements OnInit {
  @Output() itemChange = new EventEmitter<number>();
  @Input() item! : number;

  constructor() {}

  ngOnInit() {}
  updateVal($event: Event) {
    console.log(this.item);

    this.itemChange.emit(this.item);
  }
}
