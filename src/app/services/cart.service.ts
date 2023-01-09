import { Injectable } from '@angular/core';
import { Cart } from '../shared/modal/cart';
import { CartItem } from '../shared/modal/cartItem';
import { Foods } from '../shared/modal/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();


  addToCart(food:Foods):void{
    let cartItem = this.cart.items.find(item=> item.food.id===food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity+1)
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  // special attention here
  changeQuantity(id: number, quantity: number) {
    let cartItem = this.cart.items.find(item=> item.food.id === id);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  removeCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item=> item.food.id != foodId);
  }

  getCart():Cart{
    return this.cart;
  }
}
