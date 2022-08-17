import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

  function checkPasswordsMatch (group: AbstractControl):  {[key:string]: boolean} | null {

    let password = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value

    return password === confirmPass ? null : { notSame: true }
  }

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  passwordMessage : string = '';

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    // password: ['', Validators.required, Validators.minLength(4)],
    passwordGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: checkPasswordsMatch }),

  });;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private http: HttpClient,
              private router: Router) {}

  ngOnInit() {


    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl()
    // })
  }
  save() {
    console.log(this.registerForm.value);
    // console.log('saved', +JSON.stringify(this.registerForm));
    let registerData = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.passwordGroup.password
    }

    // jobData = this.http.post('http://localhost:3000/api/v1/auth/register', this.registerData).subscribe(el => console.log(el))


    this.auth.register(registerData).subscribe(el => {
      this.auth.setLocalStorage(el)
      console.log(this.auth.isLoggedIn())
      this.router.navigate(['/user/dashboard'])
      console.log(el)
    })
    // this.http.post('http://localhost:3000/aoi')
  }

}
