import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems:[]=[];
  constructor(private _SharedService:SharedService){
    this._SharedService.sharedData.subscribe(data=>{
      this.cartItems = data;
    })
  }
}
