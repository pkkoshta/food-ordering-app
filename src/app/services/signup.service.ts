import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from '../shared/modal/SignUp';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

   private baseUrl:string='http://localhost:9091';

  constructor(private http:HttpClient) { }

  registerCustomer(sign:SignUp):Observable<any>{
    return this.http.post(`${this.baseUrl}/customer/api`, sign);
  }


}
