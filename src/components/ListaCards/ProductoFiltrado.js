import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../Card/Cards'
import CardsCategoria1 from '../Card/Cards'

export default function ProductoFiltrado() {

    const [Filtrado, setFiltro] = useState([])
    const {title} = useParams()
    
    

    const llamada = () => {
        fetch(`https://fakestoreapi.com/products/category/${title}`)
        .then(res => res.json())
        .then(respuesta => setFiltro(respuesta))
        .catch(err => console.log("ERROR", err))
    }
      useEffect(()=>{
          llamada()
      },[title])
      
      return (
        <div className='container-box '>
            {Filtrado.map((elm)=>{
                
            return <Cards  producto={elm}/>
            
            })}
        </div>
        
  )
}
