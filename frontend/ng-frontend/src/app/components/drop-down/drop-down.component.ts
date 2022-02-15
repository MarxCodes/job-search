import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
 @Input() bald = '';
 @Output() itemChange = new EventEmitter<number>();
 @Input() item = 0;

  constructor() { }

  ngOnInit(): void {
  }
  updateVal(event: any){
    this.itemChange.emit(this.item);

  }
}
