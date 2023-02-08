import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/modal/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   foods:Foods[]=[];
   notFound = false;
  constructor(private fs:FoodService, 
    private route:ActivatedRoute,
    private cs:CartService){
    
  }
// backend call
  ngOnInit(): void {
    this.route.params.subscribe(prams=>{
      if(prams['searchItem'])
      this.fs.getFoods()
      .subscribe(data=>{
        this.foods = data.filter(food=> food.name.toLocaleLowerCase()
      .includes(prams['searchItem'].toLocaleLowerCase()));  
      })                
      else
      this.fs.getFoods()
      .subscribe(data=>{
        this.foods = data
      })             
    })
  }

  
  // ngOnInit(): void {
  //   this.route.params.subscribe(prams=>{
  //     if(prams['searchItem'])
  //     this.foods = this.fs.getAll()
  //                      .filter(food=> food.name.toLocaleLowerCase()
  //                      .includes(prams['searchItem'].toLocaleLowerCase()));
  //     else if(prams['tag']) 
  //     this.foods = this.fs.getFoodByTag(prams['tag']);                
  //     else
  //     this.foods = this.fs.getAll();                 
  //   })
  // }

}
