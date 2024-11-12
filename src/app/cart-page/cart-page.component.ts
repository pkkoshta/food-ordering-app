import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { CartRequestDTO } from '../shared/modal/backend/CartRequestDto';
import { Cart } from '../shared/modal/cart';
import { CartItem } from '../shared/modal/cartItem';
import { Foods } from '../shared/modal/food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!:Cart;


  constructor(private cs:CartService, private router:Router){
   
     this.setCart();
    
  }

  orderComplete(){
    this.cs.proccedToCheckout().subscribe(data=>{
    if(data){
      console.log(data)
      this.router.navigateByUrl('/')
    }
      })
  }
  
  // here calling dummay
  setCart(){
    
    this.cart = this.cs.getCart();
  
    }
    
  
    cartDtos: CartRequestDTO = new CartRequestDTO();
  removeFromCart(cartItem:CartItem){
     this.cartDtos.customerId=202;
     this.cartDtos.productId=cartItem.foodId;
      this.cs.removeCart(this.cartDtos).subscribe(data=>{
       this.cart = data;
       this.setCart();
      })
  }

  changeQuantiy(cartItem: CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
   // this.cs.changeQuantity(cartItem.foodId, quantity);
    this.setCart();

  }



  
}
