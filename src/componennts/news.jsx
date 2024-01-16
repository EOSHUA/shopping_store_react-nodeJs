import React, { useEffect, useState } from 'react'
import axios from 'axios'
const parseString = require('xml2js');

export default function News() {
    const[data,setData]=useState({})
    useEffect(() =>{
        axios.get('https://rss.walla.co.il/feed/22').then((response) =>console.log(response))
    },[])
  return (
    <div>
        {Object.values(data).map(data =>{
        console.log(data),
        parseString.parseString(data, { explicitArray: false, mergeAttrs: true }, (err, result) => {
             if (err) {
                console.error(err);
                return;
              }
            
              console.log(result.item);
            })})}
    </div>
  )
  
}
