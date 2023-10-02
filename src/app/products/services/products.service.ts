import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string= 'https://fakestoreapi.com/products'
  constructor(private _HttpClient:HttpClient) { }
  getAllProducts(){
    return this._HttpClient.get<any>(this.url)
  }
  getProductDetails(id:any){
    return this._HttpClient.get(`${this.url}/${id}`)
  }
  getCatProducts(catName:any){
    return this._HttpClient.get(`${this.url}/category/${catName}`)
  }
}
