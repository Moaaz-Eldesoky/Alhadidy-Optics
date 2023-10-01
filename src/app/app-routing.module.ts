import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { EyeGlassesComponent } from './products/components/eye-glasses/eye-glasses.component';
import { SunGlassesComponent } from './products/components/sun-glasses/sun-glasses.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

const routes: Routes = [
  {path:'home' , component:AllProductsComponent},
  {path:'product-details/:id' ,component:ProductDetailsComponent},
  {path:'eye-glasses',component:EyeGlassesComponent},
  {path:'sun-glasses',component:SunGlassesComponent},
  // {path:'spinner',component:SpinnerComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
