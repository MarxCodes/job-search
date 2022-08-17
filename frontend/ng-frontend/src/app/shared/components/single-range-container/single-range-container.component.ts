import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-range-container',
  templateUrl: './single-range-container.component.html',
  styleUrls: ['./single-range-container.component.scss']
})
export class SingleRangeContainerComponent implements OnInit {
  dinputtedVal: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
