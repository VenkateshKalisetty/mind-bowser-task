import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from '../shared/toastr/toastr.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.append('authorization', `Bearer ${token}`);
    }
    const authReq = req.clone({ headers: newHeaders });
    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.authService.removeToken();
          this.toastr.info(`Session Expired. Please login again!`);
          this.router.navigate(['auth', 'signin']);
        }
        return throwError(err);
      })
    );
  }
}
