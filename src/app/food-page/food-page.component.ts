import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { CartRequestDTO } from '../shared/modal/backend/CartRequestDto';
import { CartItem } from '../shared/modal/cartItem';
import { Foods } from '../shared/modal/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

  food!:Foods;
  cartRequestDTO!:CartRequestDTO;
  constructor(private activatedRoute:ActivatedRoute, private fs:FoodService, private cs:CartService, private router:Router){
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id'])
     
       this.fs.foodById(params['id']).subscribe(data=>{
        this.food = data;
        this.totalPrice = this.food.price;
       })
       
    })
  }


  addToCart(){
    this.food.quantity = this.quantity;
  
    this.cs.saveProduct(this.food).subscribe(data=> console.log('add to cart', data));
  }

  ngOnInit(): void {
    
  }

  
  totalPrice:number=0

  quantity:number=1;
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
