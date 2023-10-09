import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartItems:[]=[];
  constructor(private _SharedService:SharedService){
    this._SharedService.sharedData.subscribe(data => {
      this.cartItems = data;
    });
  }
}
