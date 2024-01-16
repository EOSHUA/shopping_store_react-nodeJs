
import { useState,useContext, useEffect } from 'react'
import { CardContext } from "./Layout";



export default function CartItem({item}) {

  const { cartItem, setCartItem } = useContext(CardContext);


//   const [amount, setAmount] = useState(item.amount)

//   useEffect(()=>{
//       if(amount==0) return 
//     setCartItem({...cartItem, [item.id]: {...item,amount :amount}})
//     },[amount])
    
// const handlePlus =()=>{
// setAmount(amount+1)

// }

//   const handleMinus = () => {
//       amount >0 && setAmount(amount-1)
//   }



const handelPlus = () => {
    console.log( cartItem); 
    try {
    
      if (cartItem==undefined||cartItem[item.id]==undefined) {
        setCartItem({ ...cartItem, [item.id]: { ...item, amount: 1 } });
      } else {
        setCartItem({
          ...cartItem,
          [item.id]: { ...item, amount: cartItem[item.id].amount + 1 },
        });
      }
      // if(cartItem && cartItem[item.id].amount){
      // setCartItem({...cartItem, [item.id]: {...item,amount:cartItem[item.id].amount+1}})}
      // else{
      //   setCartItem({...cartItem, [item.id]: {...item,amount:1}})}
    } catch (e) {
      console.log(e);
    }
  };



const handleMinus = () => {
     
    if (cartItem && cartItem[item.id].amount > 0) {
        setCartItem({
            ...cartItem,
            [item.id]: { ...item, amount: cartItem[item.id].amount - 1 },
        })
        return
        }
    if(cartItem[item.id].amount = 1){
        deleteCartItem()  
    }  
}
// } else {
//   setCartItem({ ...cartItem, [item.id]: { ...item, amount: 0 } });
// }
const deleteCartItem =() => {
    let updatedCartItem  = {...cartItem}
    delete updatedCartItem [item.id]
    return  setCartItem(updatedCartItem ) ;
  }
  

  return (
    
    <div className='itemInCart'>
       <div className='itemText'>
          <h2 >{item.name}</h2>
          <h4>{(item.price*item.amount).toFixed(2)}</h4>
          <h2>{item.emoji}</h2> 
      </div>
      <span className='amountInCart'>{item.amount}</span> 
      <div className='itemBattens'>
      <br />
          <button  className=' btn btn-outline-secondary btn-sm ' onClick={handelPlus}>➕</button>
          <br />
          <button className='btn btn-outline-secondary btn-sm' onClick={handleMinus}>➖</button>
          <br/>
          <button className='btn btn-outline-secondary btn-sm' onClick={deleteCartItem}>❌</button>
    </div>
    </div>
    
        )
}
