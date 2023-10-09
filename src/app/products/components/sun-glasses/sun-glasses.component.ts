import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-sun-glasses',
  templateUrl: './sun-glasses.component.html',
  styleUrls: ['./sun-glasses.component.css']
})
export class SunGlassesComponent {
  constructor(private _ProductsService:ProductsService){}
  catProducts:any =[];
  spinner:boolean = true;
  ngOnInit(){

    this._ProductsService.getCatProducts("men's clothing").subscribe(
      (data)=>{
        this.spinner = true;
        this.catProducts = data;
        this.spinner=false
      },
      (err)=>{
        this.spinner=false;

      }

    )
  }
}
