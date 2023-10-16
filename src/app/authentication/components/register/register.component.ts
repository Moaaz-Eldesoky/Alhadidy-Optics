import { Component } from '@angular/core';
import { AuthService } from '../../services/authService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = "";
  email:string = "";
  password:string = "";
  constructor(private _AuthService:AuthService){}
  onSubmit():void{
    this._AuthService.register(this.name,this.email,this.password).subscribe(
      (res)=>{
        console.log("register successful the res value is:" + res)
    },
    (err)=>{
      console.log(err)
    }
    )

  }
}
