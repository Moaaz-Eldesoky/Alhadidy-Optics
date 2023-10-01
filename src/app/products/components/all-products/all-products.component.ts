import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SharedService } from 'src/app/shared/services/shared.service';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  constructor(private _ProductsService:ProductsService,private _SharedService:SharedService){}
  allProducts:any =[];
  spinner:boolean = true;
  ngOnInit(){

    this._ProductsService.getAllProducts().subscribe(
      (data)=>{
        this.spinner = true;
        this.allProducts = data;
        this.spinner=false
        console.log(JSON.stringify(data))
        this._SharedService.sharedData = data;
      },
      (err)=>{
        this.spinner=false;

      }

    )
  }
}
