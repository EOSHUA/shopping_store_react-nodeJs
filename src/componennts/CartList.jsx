import {useContext} from 'react'
import React from "react";
import ItemLists from './ItemLists'
import CartItem from './CartItem'
import { CardContext } from "./Layout";
import Total from "./Total"



export default function CartList() {
 const { cartItem, setCartItem } = useContext(CardContext);
 
 const deleteCartItem =() => {
    setCartItem() ;
}


  return (
    <div>
        <div className='deleteAll'>
          {/* <span>Delete All  </span> */}
       <button className='btn btn-outline-secondary btn-sm' onClick={deleteCartItem}> 🗑️</button>

        <div className="CartList">
        {cartItem ? Object.values(cartItem).map((item,index) =>
       <CartItem item={item} key={index} />) : null}
        </div>


            
      
        </div>
        
      
    


    </div>
  )
}
