import {useReducer} from 'react';
import CartContext from "./cartContext";

//Default cart State when no item in it
const defaultCartState={
    item:[],
    totalQuantity:0,
    totalAmount:0,
}
const cartReducer=(state,action)=>{
    if(action.type==='Add'){
        const updatedTotalQuantity=state.totalQuantity+1;//updating the quantity
        const updatedTotalAmount=state.totalAmount+action.item.price*1;//updating the price
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);//find the index of current element which we have to eneter into the cart
        const existingCartItem=state.items[existingCartItemIndex];

        let updatedItems;
        if(existingCartItem){
            //this means item is present in the cart so we need to add quantity and amount 
            const updatedItem={
                ...existingCartItem,
            };
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }else{
            updatedItems=state.items.concat(action.item);
        }
        return{
            items:updatedItems,
            totalQuantity:updatedTotalQuantity,
            totalAmount:updatedTotalAmount,
        }
    };
    if(action.type==='REMOVE'){
        const updatedTotalQuantity=state.totalQuantity-1;
        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.id);
        const existingCartItem=state.items[existingCartItemIndex];
        const updatedTotalAmount=state.totalAmount-existingCartItem.price;//we have to reduce the amount so we will reduce the amount by existing item price
        let updatedItems;
        if(existingCartItem.quantity==1){
            updatedItems=state.items.filter(item=>item.id!==action.id);
        }
        else{
            const updatedItem={
                ...existingCartItem,

            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        return{
            items:updatedItems,
            totalQuantity:updatedTotalQuantity,
            totalAmount:updatedTotalAmount
        }

    };
    return defaultCartState;
}
const CartContextState=(props)=>{
    //when we have to manage multiple states we can useReducer hook instead of useState
    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);

    const addToCartHandler=(item)=>{
        dispatchCartAction({
            type:'ADD',
            item:item,
        })
    }
    const removeFromCartHandler=(id)=>{
        dispatchCartAction({
            type:'REMOVE',
            id:id,
        })
    }
    const cartContext={
        items:cartState.items,
        totalQuantity:cartState.totalQuantity,
        totalAmount:cartState.totalAmount,
        addItem:addToCartHandler,
        removeItem:removeFromCartHandler

    }
    
    
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextState;