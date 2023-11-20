import React from 'react'
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { useState } from 'react';


export default function FinalizarCompraFinal() {

  const [idpedido, setIdpedido] = useState("")

const order={
  buyer:{
    name:"pablo"
  }
}

  const handleClick = () =>{
    const db = getFirestore();  
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
    .then(doc => {
      setIdpedido(doc.id)
     
    })
  }

  return (

    
    <div>
      Gracias por su compra
      <button onClick={handleClick}>generar orden de compra</button>
      <div>{idpedido}</div>
     
        
    </div>

    
  )
}
