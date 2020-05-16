import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req;
    console.log(newReq);

    if (this.authService.isLoggedIn()) {
      newReq = req.clone({
        setParams: {
          auth: this.authService.token
        }
      });
    }

    return next.handle(newReq)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          this.authService.logOut();
          this.router.navigate(['/', 'admin', 'login']);

          return throwError(error);
        })
      );
  }
}

export const HTTP_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
