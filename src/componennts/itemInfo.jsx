import React from 'react'
import EditEmployee from './EditEmployee'
import { useParams } from "react-router-dom";
import ItemLists from './ItemLists';

export default function ItemInfo() {
  const{id}=useParams()
  return (
    <div>
     <ItemLists/>
     <EditEmployee idItem={id}/>
    </div>
  )
}
