import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http:localhost:2000/api/v1/auth';


  constructor(private http: HttpClient) { }

  register(data: object) {
    console.log(this.authURL);
    // const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post(this.authURL + '/register', data);
  }

  logout() {

  }

  isLoggedIn() {

  }

  isLoggedOut( ) {

  }

  setLocalStorage(resObj: {}) {
    // const expires = moment.add(resObj.expiresIn);
    // const expires = moment().add(resObj.expiresIn)

    // localStorage.setItem('token', )
  }

  getExpiration() {

  }
}
