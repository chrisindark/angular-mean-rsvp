// src/app/auth/auth-http.factory.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted request ...');
    const _token = localStorage.getItem('access_token');
    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${_token}`)
    });

    return next.handle(authReq)
      .catch((error, caught) => {
        // intercept the respons error and displace it to the console
        console.log('error occurred ...');
        console.log(error);
        // return the error to the method that called it
        return Observable.throw(error);
      }) as any;
  }

}
