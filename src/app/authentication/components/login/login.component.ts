import { Component } from '@angular/core';
import { AuthService } from '../../services/authService.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = "";
  password:string = "";
  constructor(private _AuthService:AuthService){

  }
  onSubmit():void{
    this._AuthService.login(this.email,this.password).subscribe(
      (res)=>{
        console.log("login successful the res value is:" + res)
    },
    (err)=>{
      console.log(err)
    }
    )

  }
}
