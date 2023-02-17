import { ShoppingCart } from "./backend/shoppingCart";
import { CartItem } from "./cartItem";
import { Foods } from "./food";

export class Cart{
    foods:CartItem[]=[];
    totalPrice!:number;

    //shoppingCarts:ShoppingCart[]=[]

    // get totalPrice():number{
    //     let totalPrice = 0;
    //     this.items.forEach(item => {
    //         totalPrice += item.price;
    //     });
    //     return totalPrice;
    // }
}