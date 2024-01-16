import React from 'react'
import '../style.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function Categories() {


  const navigate = useNavigate();

  return (
    <div className='allCategories'>

        <section className='categories' onClick={()=> navigate("/categories/fruits")}>
          
              <img src="https://cdn-icons-png.flaticon.com/512/3194/3194766.png"/>
              <h3>Fruits</h3>
        </section>
        <section  className='categories' onClick={()=> navigate("/categories/vegetables")}>
            <img src= "https://cdn-icons-png.flaticon.com/512/10107/10107601.png"/>
            <h3>Vegetables</h3>
        </section>
        <br />
        <section  className='categories' onClick={()=> navigate("/categories/alcohol")}>
            <img src= "https://cdn-icons-png.flaticon.com/512/920/920582.png"/>
            <h3>Alcohols</h3>
        </section>
        <section  className='categories' onClick={()=> navigate("/categories/dairy")}>
            <img src= "https://cdn-icons-png.flaticon.com/512/2674/2674486.png"/>
            <h3>Dairy</h3>
        </section>
    </div>
  )
}
