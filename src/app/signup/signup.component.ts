import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { SignUp } from '../shared/modal/SignUp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  sign:SignUp = new SignUp();

  constructor(private customerService:SignupService, private router:Router){}

  signUp(){
    this.customerService.registerCustomer(this.sign).subscribe(data=>{
     if(data != undefined){
      this.router.navigateByUrl('/');
     }
    })

    this.sign = new SignUp();
    
  }

}
