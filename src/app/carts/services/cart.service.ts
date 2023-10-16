import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/carts';

  constructor(private _HttpClient:HttpClient) { }
  addToCart(productId: number, quantity: number): Observable<any> {
    const cartItem = { productId, quantity };
    return this._HttpClient.post<any>(this.apiUrl, cartItem);
  }
}
