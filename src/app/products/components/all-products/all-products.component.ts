import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SharedService } from 'src/app/shared/services/shared.service';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})

export class AllProductsComponent {

  allProducts: any = [];
  spinner: boolean = true;
  cartProducts: any[] = [];
  quantity: any = 1;
  showAlert = false;

  constructor(private _ProductsService: ProductsService, private _SharedService: SharedService) { }


  ngOnInit() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this._SharedService.setSharedData(this.cartProducts)          //send data to navbar and cart component
    this._ProductsService.getAllProducts().subscribe(
      (data) => {
        this.spinner = true;
        this.allProducts = data;
        // this.allProducts.forEach((product: any) => {        old way to add the quantity forEach product
        //   product.quantity = 0;
        // });
        this.spinner = false
      },
      (err) => {
        this.spinner = false;

      }

    )

  }

  addToCart(productData: any) {
    if (productData.quantity < 1) {
      alert("please add the number of items before adding to cart")
    }
    else {
      if ("cart" in localStorage) {
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
        console.log("cartProducts value is :" + JSON.stringify(this.cartProducts))
        let exist = this.cartProducts.find((item: any) => item.id == productData.id)
        if (exist) {
          alert("this item alrady exist in your cart")
        }
        else {
          this.cartProducts.push(productData);
          localStorage.setItem("cart", JSON.stringify(this.cartProducts))
          // show the alert
          this.showAlert = true;
          // Hide the alert after 3 seconds
          setTimeout(() => {
            this.showAlert = false;
          }, 3000);
          this._SharedService.setSharedData(this.cartProducts)            //send data to navbar cartIcon
        }
      }
      else {
        this.cartProducts.push(productData);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
        // show the alert
        this.showAlert = true;
        // Hide the alert after 3 seconds
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
        this._SharedService.setSharedData(this.cartProducts)              //send data to navbar cartIcon

      }
    }
  }

  incrment(productID: number) {
    let indexToUpdate = this.allProducts.findIndex((e: any) => {
      return e.id == productID
    })

    if (indexToUpdate != -1) {
      this.allProducts[indexToUpdate].quantity++
    }
  }

  decriment(productID: any) {
    let indexToUpdate = this.allProducts.findIndex((e: any) => {
      return e.id == productID
    })

    if (indexToUpdate != -1) {
      this.allProducts[indexToUpdate].quantity--
    }
  }
}
