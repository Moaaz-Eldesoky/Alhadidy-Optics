import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { SharedService } from '../shared/services/shared.service';
import {ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [
    CartComponent,

  ],
  imports: [
    CommonModule,
    ProductsModule
  ],
  providers:[
    SharedService,

  ]
})
export class CartsModule { }
