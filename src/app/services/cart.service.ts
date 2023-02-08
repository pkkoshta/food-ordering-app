import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartRequestDTO } from '../shared/modal/backend/CartRequestDto';
import { CartServiceBack } from '../shared/modal/backend/cartServiceBack';
import { Cart } from '../shared/modal/cart';
import { CartItem } from '../shared/modal/cartItem';
import { Foods } from '../shared/modal/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart!:Cart;

  private baseUrl:string = 'http://localhost:9092/cartService/saveCart';

  private getCartItemByCid:string='http://localhost:9092/cartService/customerid';
   private removeCartProduct:string = 'http://localhost:9092/cartService/remove';

   private completeOrderUrl:string = 'http://localhost:9092/cartService/completeOrder/202';

  cartService : CartRequestDTO = new CartRequestDTO();

  constructor(private http:HttpClient, private router:Router){}

  
  // saveToCart(food:Foods){
  //   this.cartService.foodId = food.id;
  //   this.cartService.quantity = food.quantity;
  //   return this.http.post(`${this.baseUrl}`, this.cartService);
  // }
  food!:Foods;

  cartRequestDT:CartRequestDTO = new CartRequestDTO();


  completeOrder():Observable<Cart>{
    return this.http.get<Cart>(`${this.completeOrderUrl}`); 
  }


  saveProduct(food:Foods):Observable<Cart>{
    this.cartRequestDT.customerId=202;
    this.cartRequestDT.productId=food.id;
    this.cartRequestDT.quantity=food.quantity;
    return this.http.post<Cart>(`${this.baseUrl}`, this.cartRequestDT); 
  }



  removeCart(cartRequestDTO:CartRequestDTO):Observable<Cart>{
    return this.http.get<Cart>(`${this.removeCartProduct}/`+cartRequestDTO.customerId+ "/"+cartRequestDTO.productId);
    
    
  }

  getCart():Observable<Cart>{
   
    return this.http.get<Cart>(`${this.getCartItemByCid}/202`);
  }
}
