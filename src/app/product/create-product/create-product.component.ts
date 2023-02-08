import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Product } from 'src/app/shared/modal/backend/product';
import { Foods } from 'src/app/shared/modal/food';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product:Product= new Product();

  constructor(private foodService:FoodService){}

  createProduct(){
    console.log(this.product.origins);
    this.foodService.createFood(this.product).subscribe((data)=>{
      console.log(data);
    })

 this.product=new Product;
  }

 
}
