import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { TruncateDescriptionPipe } from 'src/app/truncate-description.pipe';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any=[];
  constructor(private _SharedService:SharedService){

  }
  ngOnInit(){
    this._SharedService.sharedData.subscribe(data=>{
      this.cartItems = data;
    })
    // this.cartItems = JSON.parse(localStorage.getItem("cart")!)
    // console.log("cartItems:"+this.cartItems)
  }

  incrment(productID:number){
    let indexToUpdate = this.cartItems.findIndex((e:any)=>{
    return e.id==productID
    })

    if(indexToUpdate!=-1){
      this.cartItems[indexToUpdate].quantity++
      localStorage.setItem("cart",JSON.stringify(this.cartItems))
    }
  }

  decriment(productID:any){
    let indexToUpdate = this.cartItems.findIndex((e:any)=>{
      return e.id==productID
      })

      if(indexToUpdate!=-1){
        this.cartItems[indexToUpdate].quantity--
        localStorage.setItem("cart",JSON.stringify(this.cartItems))
      }}
}
