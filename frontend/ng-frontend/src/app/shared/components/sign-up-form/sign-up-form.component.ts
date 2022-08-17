import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter();

  passwordMessage: string = '';
  signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });;
  constructor(private fb: FormBuilder,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  save() {
    let data = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    }

    this.auth.login(data).subscribe(
      el => {
        this.auth.setLocalStorage(el)
        this.router.navigate(['/user/dashboard'])
        console.log(el);
        this.closeDrawer.emit()
      }
    )
    console.log('saved', JSON.stringify(this.signInForm.value));
  }

}
