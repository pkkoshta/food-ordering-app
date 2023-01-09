import { Component, Input, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/modal/cart';
import { CartItem } from '../shared/modal/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!:Cart;


  constructor(private cs:CartService){
    
    this.setCart();
  }

  setCart(){
    this.cart = this.cs.getCart();
  }

  removeFromCart(cartItem:CartItem){
   this.cs.removeCart(cartItem.food.id);
   this.setCart();
  }

  changeQuantiy(cartItem: CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cs.changeQuantity(cartItem.food.id, quantity);
    this.setCart();

  }
}
