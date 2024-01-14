import {React, useContext} from 'react'
import '../style.css'
import CartList from './CartList'
import Total from './Total'
import { CardContext } from "./Layout";


export default function Cart() {
 const { cartItem, setCartItem } = useContext(CardContext);  
  return (
   <div className='continer'>
    <div className='Cart'>
   <h2>your cart</h2>
   <CartList />
    </div> 
    <Total/>
    </div>
  )
}
