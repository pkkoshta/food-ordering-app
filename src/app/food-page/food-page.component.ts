import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/modal/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute, private fs:FoodService, private cs:CartService, private router:Router){
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id'])
     
       this.food = this.fs.getFoodById(params['id'])
       
    })
  }

  addToCart(){
    this.cs.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {
    
  }

}
