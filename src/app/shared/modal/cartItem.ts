import { Foods } from "./food";

export class CartItem{

    customerId!:number;
    foodId!:number;
    name!:string;
    imageUrl!:string;
    price!:number;
    quantity!:number;
    totalPrice!:number;
    
    // constructor(food :Foods){
    //     this.food = food;
    // }
    // food:Foods;
    // quantity:number=1;

    // get price():number{
    //     return this.food.price*this.quantity;
    // }
}