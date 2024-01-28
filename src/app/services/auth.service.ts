import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.bookUrl;
  private isAuthenticated = false;
  private authToken = 'token';
  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticated = !!localStorage.getItem(this.authToken);
  }

  signup(signupData: {}){
    this.http.post(`${this.url}/users`, signupData).subscribe(
      (res) => {
        if (res && (res as any)['token']) {
          localStorage.setItem(this.authToken, (res as any)['token']);
          this.isAuthenticated = true;
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.error('signup error', error);
      }
    );
  }

  login(loginData: {}) {
    this.http.post(`${this.url}/auth/login`, loginData).subscribe(
      (res) => {
        if (res && (res as any)['token']) {
          localStorage.setItem(this.authToken, (res as any)['token']);
          this.isAuthenticated = true;
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.error('Login error', error);
      }
    );
  }

  isAuthenticateUser(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    localStorage.removeItem(this.authToken);
    this.isAuthenticated = false;
  }
}
