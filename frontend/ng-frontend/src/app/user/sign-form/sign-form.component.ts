import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {
  register = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeTemplate() {
    this.register = false;
  }
}
