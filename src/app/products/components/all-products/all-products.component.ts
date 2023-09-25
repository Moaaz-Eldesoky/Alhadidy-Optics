import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  constructor(private _ProductsService:ProductsService){}
  allProducts:any =[];
  ngOnInit(){

    this._ProductsService.getAllProducts().subscribe(
      (data)=>{
        this.allProducts = data;
        console.log(JSON.stringify(data))
      },
      (err)=>{
        console.log(err)
      }

    )
  }
}
