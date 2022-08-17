import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})

export class AddHeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    // const token = localStorage.get('')
    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders: { Authorization : `${token}` },

    })

    return next.handle(jsonReq);
  }
  // constructor() { }



}
