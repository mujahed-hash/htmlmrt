import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { baseUrl } from '../services/allurls';
import { environment } from 'environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post(`${this.baseUrl}/user/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  getUserProfile(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(`${this.baseUrl}/user/userProfile`, { headers });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserRole(): string {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if (tokenDecode) {
        if (tokenDecode.isAdmin) return 'admin';
        if (tokenDecode.isSupplier) return 'supplier';
        if (tokenDecode.isBuyer) return 'buyer';
      }
    }
    return '';
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  isSupplier(): boolean {
    return this.getUserRole() === 'supplier';
  }

  isBuyer(): boolean {
    return this.getUserRole() === 'buyer';
  }

  logout() {
    localStorage.removeItem('token');
  }
}
