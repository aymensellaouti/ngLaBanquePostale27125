import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { HttpClient } from '@angular/common/http';
import { APP_CONST } from 'src/app/config/app-constantes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  constructor() {}

  login(credentials: Credentials) {}

  setToken(token: string): void {
    localStorage.setItem(APP_CONST.tokenName, token);
  }

  getToken(): string {
    return localStorage.getItem(APP_CONST.tokenName) ?? '';
  }
  removeToken(): void {
    localStorage.removeItem(APP_CONST.tokenName);
  }
}

