import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { ColeccionContext} from '../../context/ColeccionContext';
import { useContext,useEffect } from 'react';



export default function TableTotal({producto}) {
  const { coleccion, setColeccion } = useContext(ColeccionContext)

  const [cantidad,setCantidad] = useState(producto.cantidad)



  const decrementarProducto = () => {
    producto.cantidad < 1? alert("Debe elegir aunquesea uno"):
    setCantidad(producto.cantidad-- - 1)
  };

  const incrementarProducto = () => {
    
    setCantidad(producto.cantidad++ + 1)
  };

  
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
