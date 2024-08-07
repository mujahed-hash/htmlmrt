import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../services/allurls';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getOrderAS(customIdentifier:any, token:any){
    const headers = {
      Authorization: `Bearer ${token}`
    };
  
    // Create an HTTP request with headers
    const options = { headers: new HttpHeaders(headers) };
    return this.http.get<any>(`${this.baseUrl}/order/${customIdentifier}`, options);
  }
}
