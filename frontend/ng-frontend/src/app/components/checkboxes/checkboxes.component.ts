import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {
  form = new FormGroup({
    checks: new FormControl('today'),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
