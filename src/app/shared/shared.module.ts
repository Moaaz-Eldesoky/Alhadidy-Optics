import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsService } from '../products/services/products.service';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';




@NgModule({
  providers:[ProductsService],
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
