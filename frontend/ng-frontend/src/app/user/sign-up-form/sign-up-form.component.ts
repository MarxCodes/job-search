import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
  } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  passwordMessage : string = '';

  signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    // password: ['', Validators.required, Validators.minLength(4)],
    password: ['', [Validators.required, Validators.minLength(4)]],


  });;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  save() {
    console.log(this.signInForm);
    console.log('saved', +JSON.stringify(this.signInForm.value));
  }

}
