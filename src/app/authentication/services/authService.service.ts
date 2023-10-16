import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakestoreapi.com/auth';
  constructor(private _HttpClient:HttpClient) {}
  login(email:string,password:string):Observable<any>{
    const credintials = {email,password};
    return this._HttpClient.post<any>(`${this.apiUrl}/login`,credintials)
  }
  logout():Observable<any>{
    return this._HttpClient.post<any>(`${this.apiUrl}/logout`,{})
  }
  register(name: string, email: string, password: string): Observable<any> {
    const userData = { name, email, password };
    return this._HttpClient.post<any>(`${this.apiUrl}/register`, userData);
  }

}
