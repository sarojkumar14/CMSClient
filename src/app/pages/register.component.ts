import { Component } from '@angular/core';
import { Register } from '../_models/index';

@Component({
  templateUrl: 'register.component.html',
  styleUrls:['./register.component.css']
})
export class RegisterComponent {
  private register:Register;
  constructor() {
    this.register=new Register();
   }

   onRegisterClick(){
     var x=this.register;
   }
}
