import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { HttpClient } from '@angular/common/http';
import { APP_CONST } from 'src/app/config/app-constantes.config';
import { APP_API } from 'src/app/config/app-api.config';
import { LoginResponseDto } from '../dto/login-response.dto';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  login(credentials: Credentials): Observable<boolean> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap((response) => {
        this.setToken(response.id);
      }),
      map(() => true),
      catchError(e => of(false))
    );
  }

  logout() {
    this.removeToken();
  }

  setToken(token: string): void {
    localStorage.setItem(APP_CONST.tokenName, token);
  }

  getToken(): string {
    return localStorage.getItem(APP_CONST.tokenName) ?? '';
  }
  removeToken(): void {
    localStorage.removeItem(APP_CONST.tokenName);
  }
  isAuthenticated(): boolean {
    return !!this.getToken();
  }


}

