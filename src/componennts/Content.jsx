import ItemLists from './ItemLists'
import { CardContext } from "./Layout";
import { useState,useContext } from 'react'
import Categories from './Categories';
import ItemInfo from './itemInfo';
import ItemList from './ItemLists';
import { Routes, Route } from 'react-router-dom';



export default function Content() {
   const { cartItem, setCartItem } = useContext(CardContext);
  return (
    <div>
        <Routes>
          <Route  path='/categories' element={<Categories />}></Route>
          <Route  path='/categories/:cat' element={<ItemLists />}></Route>
          <Route  path='/categories/:cat/:id' element={ <ItemInfo />}></Route>

        </Routes>
    

    </div>
  )
}
