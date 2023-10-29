import React from 'react'
import { useState,useEffect } from 'react'
import CardsCategoria from '../Card/CardsCategoria'
import { useParams } from 'react-router-dom'
import {collection, getDocs} from "firebase/firestore"
import {db} from "../firebase/config";

export default function ListaCards() {

    const [Categorias, setCategorias] = useState([])
    const {title} = useParams()



      useEffect(()=>{
        const productosRef = collection (db,"productos");
        getDocs(productosRef)
        .then ((resp)=>{
            

            setCategorias(
                
                resp.docs.map((doc)=>{
                return {...doc.data(), id: doc.id}
            }))

        })
    },[title])

      
      
      return (

        <div className='container-box '>
            {Categorias.map((elm)=>{
            return <CardsCategoria producto1={elm}/> 
            })}
        </div>
  )
}
