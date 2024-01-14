import React, { useState,useEffect } from 'react'
import {useContext} from 'react'
import { CardContext } from "./Layout";

export default function Total() {
  const { cartItem, setCartItem } = useContext(CardContext);
  const [totalSum, setTotalSum] = useState(0)
  
  useEffect(() => {
      if (cartItem) {
        const newTotalSum = Object.values(cartItem).reduce(
          (sum, item) => sum + item.price * item.amount,
          0
        );
        setTotalSum(newTotalSum);
      } else {
        setTotalSum(0);
      }
    }, [cartItem]);



  return (
    <div className='total'>
      <h4>To pay: </h4>
      <h2>{totalSum.toFixed(2)}$</h2>
    </div>
  );
}
