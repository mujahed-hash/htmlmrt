import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { baseUrl } from '../services/allurls';
@Injectable({
  providedIn: 'root'
})
export class AllService {
  baseUrl = baseUrl;

  constructor(private http: HttpClient) {}

  getProducts():Observable<any>{
    return this.http.get(`${this.baseUrl}/products`);
  }

}
