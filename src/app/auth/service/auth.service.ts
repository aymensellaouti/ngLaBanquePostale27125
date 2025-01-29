import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  http = inject(HttpClient);

  constructor() {

  }

  login(credentials: Credentials) {

  }
}

