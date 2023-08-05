import {  createContext } from "react";
const cartContext=createContext(
    {
        items:[],
        totalQuantity:0,
        totalAmount:0,
        addItem:(item)=>{},
        removeItem:(id)=>{}
    }
);
export default cartContext;