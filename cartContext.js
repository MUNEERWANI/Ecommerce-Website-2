import {  createContext } from "react";
//we can create methods 
const CartContext=createContext(
    {
        items:[],
        totalQuantity:0,
        totalAmount:0,
        addItem:(item)=>{},
        removeItem:(id)=>{}
    }
);
export default CartContext;