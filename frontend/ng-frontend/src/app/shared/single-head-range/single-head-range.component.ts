import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-head-range',
  templateUrl: './single-head-range.component.html',
  styleUrls: ['./single-head-range.component.scss']
})
export class SingleHeadRangeComponent implements OnInit {

  @Output() itemChange = new EventEmitter<number>();
  @Input() item!: number;
  // rainVal = '';
  constructor() {}

  ngOnInit() {}
  updateVal($event: Event) {
    console.log(this.item, $event);
    this.itemChange.emit(this.item);
  }

}
