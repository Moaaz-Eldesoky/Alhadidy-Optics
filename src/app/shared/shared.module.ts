import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsService } from '../products/services/products.service';




@NgModule({
  providers:[ProductsService],
  declarations: [
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
