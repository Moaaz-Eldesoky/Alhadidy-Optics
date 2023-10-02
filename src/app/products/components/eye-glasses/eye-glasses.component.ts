import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-eye-glasses',
  templateUrl: './eye-glasses.component.html',
  styleUrls: ['./eye-glasses.component.css']
})
export class EyeGlassesComponent {
  constructor(private _ProductsService:ProductsService){}
  catProducts:any =[];
  spinner:boolean = true;
  ngOnInit(){

    this._ProductsService.getCatProducts("jewelery").subscribe(
      (data)=>{
        this.spinner = true;
        this.catProducts = data;
        this.spinner=false
        console.log("moaaz"+JSON.stringify(data))
      },
      (err)=>{
        this.spinner=false;

      }

    )
  }
}
