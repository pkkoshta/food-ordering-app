import { CartItem } from "./cartItem";

export class Cart{
    foods:CartItem[]=[];
    totalPrice!:number;

    // get totalPrice():number{
    //     let totalPrice = 0;
    //     this.items.forEach(item => {
    //         totalPrice += item.price;
    //     });
    //     return totalPrice;
    // }
}