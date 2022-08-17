import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import moment from 'moment';

interface RegisterResponse {
  token: string,
  user: object
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:3000/api/v1/auth';


  constructor(private http: HttpClient) { }

  register(data: object): Observable <RegisterResponse> {
    // console.log(this.authURL);
    // console.log(moment().)
    // const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post<RegisterResponse>(this.authURL + '/register', data);
  }

  login(data: object) {
    return this.http.post<RegisterResponse>(this.authURL + '/login', data)
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration())
  }

  isLoggedOut( ) {
    return !this.isLoggedIn();

  }

  setLocalStorage(resObj: RegisterResponse) {
    const expires = moment().add(1, 'days');
    // const expires = moment().add(resObj.expiresIn)

    localStorage.setItem('token',`Bearer ${resObj.token}`);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()))
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires");
    const expiresAt = JSON.parse(expiration || '{}');
    return moment(expiresAt)

  }

}
