import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.local';
import { User } from '../../admin/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'token';

  get token() {
    return localStorage.getItem(this.tokenKey);
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: User) {
    user.returnSecureToken = true;

    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
      user
    )
    .pipe(
      tap((response: any) => localStorage.setItem(this.tokenKey, response.idToken))
    );
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.tokenKey);
  }

  logOut() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/', 'admin', 'login']);
  }
}
