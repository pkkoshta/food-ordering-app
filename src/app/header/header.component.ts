import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/modal/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cart!:Cart;
  totalCart:number = 0;
  constructor(private cs:CartService){
    this.totalItem();
    
  }
   totalItem(){
    this.cart = this.cs.getCart();
  }

}
