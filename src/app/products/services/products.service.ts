import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  getAllProducts(){
    return this._HttpClient.get<any>('https://fakestoreapi.com/products')
  }
}
