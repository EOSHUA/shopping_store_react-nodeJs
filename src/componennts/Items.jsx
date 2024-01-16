import { useState, useContext, useEffect } from "react";
import React from "react";
import "../style.css";
import EditEmployee from "./EditEmployee"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { CardContext } from "./Layout";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

export const PopupComponent = () => (
  <Popup trigger={<button>Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);

export default function Items({ item }) {
  const { cartItem, setCartItem } = useContext(CardContext);

  const navigate = useNavigate();

 

  const handelPlus = () => {
    try {
      if (cartItem==undefined||cartItem[item.id]==undefined) {
        setCartItem({ ...cartItem, [item.id]: { ...item, amount: 1 } });
      } else {
        setCartItem({
          ...cartItem,
          [item.id]: { ...item, amount: cartItem[item.id].amount + 1 },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleMinus = () => {
    if (cartItem && cartItem[item.id].amount > 0) {
        setCartItem({
          ...cartItem,
          [item.id]: { ...item, amount: cartItem[item.id].amount - 1 },
        });
        return
    } else {
      setCartItem({ ...cartItem, [item.id]: { ...item, amount: 0 } });
      
    }
    if(cartItem[item.id].amount = 1){
      deleteCartItem()  
  }  
  };

  const deleteCartItem =() => {
    let updatedCartItem  = {...cartItem}
    delete updatedCartItem [item.id]
    return  setCartItem(updatedCartItem ) ;
  }
  const navToItemInfo=(e)=>{
    navigate(`${item.id}`)
  }

  

  return (
    <>
      <div className="item" >
        <div onClick={navToItemInfo}>
            <h3 className="display-6" >{item.name}</h3>
            <h4>{item.price}</h4>
            <h4>{item.emoji}</h4>
            <br />
        </div>
        <div className="itemButton">
        <button
          className=" btn btn-outline-secondary btn-sm "
          onClick={handelPlus}
        >
          ➕
        </button>
        <span>
          {cartItem && cartItem[item.id]
            ? cartItem[item.id].amount
            : "הוסף לעגלה"}
        </span>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={handleMinus}
          >
          ➖
        </button>
        </div>
   
      </div>
    </>
  );
}
