import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EyeGlassesComponent } from './components/eye-glasses/eye-glasses.component';
import { SunGlassesComponent } from './components/sun-glasses/sun-glasses.component';





@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    EyeGlassesComponent,
    SunGlassesComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductsModule { }
