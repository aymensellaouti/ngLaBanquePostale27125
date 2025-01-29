import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONST } from 'src/app/config/app-constantes.config';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authService = inject(AuthService);
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //const params = new HttpParams().set(APP_CONST.accesTokenParamName, this.authService.getToken())
    if (this.authService.isAuthenticated()) {
      //const headers = new HttpHeaders().set(APP_CONST.accesTokenParamName, this.authService.getToken())
      const cloneReq = request.clone({
        setHeaders: {[APP_CONST.authorizationHeader]: this.authService.getToken()}
      })
      return next.handle(cloneReq);
    }

    return next.handle(request);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

