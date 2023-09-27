import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
// import { slice } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  constructor(private _ProductsService:ProductsService){
  }
  products:any[]=[];
  ngOnInit()
  {
    this._ProductsService.getAllProducts().subscribe(
      (res:any)=>{
        this.products=res;
        console.log("Eslam"+JSON.stringify(this.products));
      },
      (err:any)=>{
        console.log(err);
      })
    }
  }

