import React from 'react'
import Content from './Content'
import Header from './Header'
import Cart from './Cart'
import { useState,useContext, createContext } from 'react'
import data from '../data'

export const CardContext = React.createContext();


export default function Layout() {
  

  
const [cartItem,setCartItem] = useState();
  
 

  return (
    <div className='layout'>
    
   
      <CardContext.Provider value={{ cartItem, setCartItem }}>
         <Cart /> 
         <Content  />
      </CardContext.Provider>
        <Header />
       
    </div>
  )
}
