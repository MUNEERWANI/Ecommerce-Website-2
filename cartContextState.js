import React from "react";
import cartContext from "./cartContext";
const cartContextState=(props)=>{
    
    return(
        <cartContextState.provider>
            {props.children}
        </cartContextState.provider>
    )
}
export default cartContextState;