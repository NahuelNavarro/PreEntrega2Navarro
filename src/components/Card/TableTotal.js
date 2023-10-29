import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { ColeccionContext} from '../../context/ColeccionContext';
import { useContext,useEffect } from 'react';



export default function TableTotal({producto}) {
  const { coleccion, setColeccion } = useContext(ColeccionContext)

  const [cantidad,setCantidad] = useState(producto.cantidad)

  const incrementarProducto = () => {
    setCantidad(producto.cantidad++)
  };

  const decrementarProducto = () => {
    setCantidad(producto.cantidad--)
  };

  console.log(coleccion)
  
  useEffect(() => {
  }, [producto])
  
  return (
   
      <tr>
        <td><Image className='size-img-resumen' src={producto.Filtrado.image} rounded /></td>
        <td>{producto.Filtrado.title}</td>
        <td>{producto.Filtrado.price * cantidad}</td>
        <td>
          <button onClick={incrementarProducto} >+</button>
          <div>{cantidad}</div>
        <button onClick={decrementarProducto} >-</button>

        </td>
        

      </tr>
   
  )
}
