import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { LoginRequest } from 'src/app/shared/modal/Login';
import { LoginResponse } from 'src/app/shared/modal/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  loginUrl:string='http://localhost:9093/user/login';
  eror:string='';
  constructor(private http: HttpClient, private router:Router) { }


  signIn(loginRequest:LoginRequest):Observable<LoginResponse>{
   return this.http.post<LoginResponse>(this.loginUrl, loginRequest).pipe(
    catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
        } else {
            errorMsg = this.getServerErrorMessage(error);
            this.eror=errorMsg;
        }

        return throwError(errorMsg);
    })
)
  }

  public isLoggedIn(){
    if(localStorage.getItem('token')){
      return true
    }
    return false;
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');

  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Invalid Username/Password `;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    if(error.status == 403){
      errorMessage ="Invalid Username/Password";
      
    }

    
    return throwError(() => {
        return errorMessage;
    });
  }
}
