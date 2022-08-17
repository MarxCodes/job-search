import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-check-item',
  templateUrl: './check-item.component.html',
  styleUrls: ['./check-item.component.scss']
})
export class CheckItemComponent implements OnInit {
  form = new FormGroup({
    checks: new FormControl('one'),
  });
  list = ['one', 'two', 'three'];

  @Input() inputVal!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
