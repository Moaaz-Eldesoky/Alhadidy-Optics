import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
// import { slice } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _ProductsService: ProductsService) {
  }
  products: any = [];

  ngOnInit() {
    this._ProductsService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
      },
      (err: any) => {
        console.log(err);
      })

  }
}

