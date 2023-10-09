import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EyeGlassesComponent } from './components/eye-glasses/eye-glasses.component';
import { SunGlassesComponent } from './components/sun-glasses/sun-glasses.component';
import { TruncateDescriptionPipe } from '../truncate-description.pipe';


import { SharedModule } from '../shared/shared.module';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared/services/shared.service';








@NgModule({

  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    EyeGlassesComponent,
    SunGlassesComponent,
    TruncateDescriptionPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    FormsModule
  ],
  providers:[
    SharedService
  ]
})
export class ProductsModule { }
