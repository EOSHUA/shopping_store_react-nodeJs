import React from 'react'
import Content from './Content'
import Header from './Header'
import Cart from './Cart'
import { useState,useContext, createContext } from 'react'
import data from '../data'
import "bootstrap/dist/css/bootstrap.min.css";
export const CardContext = React.createContext();



export default function Layout() {
const [cartItem,setCartItem] = useState();
  
 

  return (
    <>
    <nav >
          <h1 className="display-6">- s h o p p i n g  S t o r e -</h1>
    </nav>
    <div className='layout'>
    
      <CardContext.Provider value={{ cartItem, setCartItem }}>
          <Cart /> 
          <Content  />
      </CardContext.Provider>
        <Header />
       
    </div>
    </>
  )
}
