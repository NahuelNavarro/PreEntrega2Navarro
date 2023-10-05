import React from 'react'
import { useState,useEffect } from 'react'
import CardsCategoria from '../Card/CardsCategoria'
import Cards from '../Card/Cards'
import { useParams } from 'react-router-dom'

export default function ListaCards() {

    const [Categorias, setCategorias] = useState([])
    const {title} = useParams()


    const llamada = () => {
        fetch(`https://fakestoreapi.com/products?${title}`)
        .then(res => res.json())
        .then(respuesta => setCategorias(respuesta))
        .catch(err => console.log("ERROR", err))
    }
      useEffect(()=>{
          llamada()
      },[title])
      
      return (
        <div className='container-box '>
            {Categorias.map((elm)=>{
            return <CardsCategoria producto1={elm}/> 
            })}
        </div>
  )
}
