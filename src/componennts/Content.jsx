import ItemLists from './ItemLists'
import { CardContext } from "./Layout";
import { useState,useContext } from 'react'


export default function Content() {
   const { cartItem, setCartItem } = useContext(CardContext);
  return (
    <div>

       <ItemLists  />

    </div>
  )
}
