import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { EyeGlassesComponent } from './products/components/eye-glasses/eye-glasses.component';
import { SunGlassesComponent } from './products/components/sun-glasses/sun-glasses.component';

const routes: Routes = [
  {path:'home' , component:AllProductsComponent},
  {path:'eye-glassses',component:EyeGlassesComponent},
  {path:'sun-glassses',component:SunGlassesComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
