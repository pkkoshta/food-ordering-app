import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, throwError } from 'rxjs';
import { LoginService } from 'src/app/services/oauth/login.service';
import { LoginRequest } from 'src/app/shared/modal/Login';
import { LoginResponse } from 'src/app/shared/modal/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login:LoginRequest= new LoginRequest();
  loginResponse:LoginResponse = new LoginResponse();
  errorMsg:string='';
LoginService: any;

  constructor(public loginService: LoginService, private route:Router){}
  ngOnInit(): void {
    
  }

  auth(){
    
      this.loginService.signIn(this.login)
    .subscribe((data) =>{
        if(data.token !=null){
          localStorage.setItem('token', data.token);
          this.route.navigateByUrl('/')
        }

       })
    
   
  


}
}
