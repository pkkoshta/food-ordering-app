import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { CartRequestDTO } from '../shared/modal/backend/CartRequestDto';
import { OrderDTO } from '../shared/modal/backend/orderDTO';
import { ShoppingCart } from '../shared/modal/backend/shoppingCart';
import { CartItem } from '../shared/modal/cartItem';
import { Foods } from '../shared/modal/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  totalPrice:number=0

  quantity:number=1;
  food!:Foods;
  cartRequestDTO!:CartRequestDTO;
  orderDTO:OrderDTO  = new OrderDTO();
  constructor(private activatedRoute:ActivatedRoute, private fs:FoodService, private cs:CartService, private router:Router){
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id'])
     
       this.fs.foodById(params['id']).subscribe(data=>{
        this.food = data;
        this.totalPrice = this.food.price;
       })
       
    })
  }
  cartItems!:ShoppingCart;

  addToCart(){
    this.food.quantity = this.quantity;
    this.cs.addToShoppingCart(this.food);
  }

  ngOnInit(): void {
    
  }

  
  
  add(){
     
     this.quantity +=1;
     this.totalPrice = this.food.price *this.quantity;

  }

  

  minus(){
    if(this.quantity > 1){
      this.quantity -=1;
      this.totalPrice -= this.food.price;
      
    }
    
    
  }

}
