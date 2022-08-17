import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-single-range',
  templateUrl: './single-range.component.html',
  styleUrls: ['./single-range.component.scss']
})
export class SingleRangeComponent implements OnInit {
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
