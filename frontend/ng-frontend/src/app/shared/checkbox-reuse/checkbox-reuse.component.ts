import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-checkbox-reuse',
  templateUrl: './checkbox-reuse.component.html',
  styleUrls: ['./checkbox-reuse.component.scss']
})
export class CheckboxReuseComponent implements OnInit {
  form = new FormGroup({
    checks: new FormControl('today'),
  });
  list = ['today', 'past three', 'Past Week', 'Past Month'];
  @Input() name!: '';
  constructor() { }

  ngOnInit(): void {
  }



}
