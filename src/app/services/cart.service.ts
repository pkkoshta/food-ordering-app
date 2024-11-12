import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartRequestDTO } from '../shared/modal/backend/CartRequestDto';
import { CartServiceBack } from '../shared/modal/backend/cartServiceBack';
import { OrderDTO } from '../shared/modal/backend/orderDTO';
import { ShoppingCart } from '../shared/modal/backend/shoppingCart';
import { Cart } from '../shared/modal/cart';
import { CartItem } from '../shared/modal/cartItem';
import { Foods } from '../shared/modal/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

   orderDTO: OrderDTO = new OrderDTO();
   shoppingCart!:ShoppingCart;
   foods!:Foods;
   cartItems!:CartItem; 
  private baseUrl:string = 'http://localhost:9092/cartService/saveCart';

  private getCartItemByCid:string='http://localhost:9092/cartService/customerid';
   private removeCartProduct:string = 'http://localhost:9092/cartService/remove';

   private completeOrderUrl:string = 'http://localhost:9092/cartService/completeOrder/202';
   private checkoutProceed:string = 'http://localhost:9092/order/place/order'

  cartService : CartRequestDTO = new CartRequestDTO();

  constructor(private http:HttpClient, private router:Router){}

  addToShoppingCart(food:Foods){
   this.shoppingCart = new ShoppingCart();
   this.shoppingCart.productId = food.id;
   this.shoppingCart.quantity = food.quantity;
   this.orderDTO.cartItems.push(this.shoppingCart);
   console.log("Cart Service ",this.orderDTO)
   this.cartItems = new CartItem();
   this.cartItems.foodId = food.id
   this.cartItems.imageUrl = food.imageUrl;
   this.cartItems.name = food.name;
   this.cartItems.price = food.price;
   this.cartItems.quantity=food.quantity;
   this.cart.foods.push(this.cartItems);

   console.log("cartitem ", this.cart)
  }
  
  proccedToCheckout():Observable<any>{
  return this.http.post<any>(`${this.checkoutProceed}`, this.orderDTO);
    
  }
  
  

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

  // getCart():Observable<Cart>{
   
  //   return this.http.get<Cart>(`${this.getCartItemByCid}/1`);
  // }
  getCart():Cart{
    return this.cart;
  }
}
