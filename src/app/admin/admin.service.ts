import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../services/allurls';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getOrdersCountAdmin(token:any):Observable<any>{
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  
  const options = { headers: headers };
  
    return this.http.get<any>(`${this.baseUrl}/admin/orderscount`, options)
  
  
  }
  getProductsCountAdmin(token:any):Observable<any>{
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  
  const options = { headers: headers };
  
    return this.http.get<any>(`${this.baseUrl}/admin/productscount`, options)
  
  
  }
  getUsersCountAdmin(token:any):Observable<any>{
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  
  const options = { headers: headers };
  
    return this.http.get<any>(`${this.baseUrl}/admin/users-count`, options)
  
  
  }
  /// products
  getProductsAll(start: number, limit: number, token:any): Observable<{ totalProducts: number, products: any[] }> {
       const headers = {
      Authorization: `Bearer ${token}`
    };
  
    // Create an HTTP request with headers
    const options = { headers: new HttpHeaders(headers) };
    return this.http.get<{ totalProducts: number, products: any[] }>(`${this.baseUrl}/admin/allitems?start=${start}&limit=${limit}`, options);
  }

  




  /// orders
  getOrdersAll(start: number, limit: number, token:any): Observable<{ totalOrders: number, orders: any[] }> {
       const headers = {
      Authorization: `Bearer ${token}`
    };
  
    // Create an HTTP request with headers
    const options = { headers: new HttpHeaders(headers) };
    return this.http.get<{ totalOrders: number, orders: any[] }>(`${this.baseUrl}/admin/orders?start=${start}&limit=${limit}`, options);
  }
  getOrder(token:any){
       const headers = {
      Authorization: `Bearer ${token}`
    };
  
    // Create an HTTP request with headers
    const options = { headers: new HttpHeaders(headers) };
    return this.http.get<any>(`${this.baseUrl}/order/:customIdentifier`, options);
  }

  // users
  getUsers(token:any){
       const headers = {
      Authorization: `Bearer ${token}`
    };
  
    // Create an HTTP request with headers
    const options = { headers: new HttpHeaders(headers) };
    return this.http.get<any>(`${this.baseUrl}/users/all`, options);

  }
  getUserByCID(customIdentifier:any, token:any){
    const headers = {
   Authorization: `Bearer ${token}`
 };

 // Create an HTTP request with headers
 const options = { headers: new HttpHeaders(headers) };
 return this.http.get<any>(`${this.baseUrl}/user/${customIdentifier}`, options);
}
  addUser(FormData:any, token:any){
    const headers = {
   Authorization: `Bearer ${token}`
 };
 const options = { headers: new HttpHeaders(headers) };

 return this.http.post<any>(`${this.baseUrl}/user/signup`, FormData, options);

 // Create an HTTP request with headers
  }
  updateUser(customIdentifier:any,formData:any, token:any){
    const headers = {
   Authorization: `Bearer ${token}`
 };
 const options = { headers: new HttpHeaders(headers) };

 return this.http.put<any>(`${this.baseUrl}/updateuser/${customIdentifier}`, formData, options);

 // Create an HTTP request with headers
  }

  //categories
  getCategories(token:any):Observable<any[]> {
       const headers = {
      Authorization: `Bearer ${token}`
    };
  
    // Create an HTTP request with headers
    const options = { headers: new HttpHeaders(headers) };
    return this.http.get<any[]>(`${this.baseUrl}/categories`, options)
 }

 getCategory(categoryId:string, token:any):Observable<any> {
     const headers = {
      Authorization: `Bearer ${token}`
    };
  
    // Create an HTTP request with headers
    const options = { headers: new HttpHeaders(headers) };
   return this.http.get<any>(`${this.baseUrl}/${categoryId}`, options)
}

  postCategory(categoryData:any, token:any){
       const headers = {
      Authorization: `Bearer ${token}`
    };
  
    // Create an HTTP request with headers
    const options = { headers: new HttpHeaders(headers) };
    return this.http.post<any>(`${this.baseUrl}/category`, categoryData, options);

  }

  
}
