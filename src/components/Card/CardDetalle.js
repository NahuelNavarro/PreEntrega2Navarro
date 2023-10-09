import React, {useContext} from 'react';
import { useState, useEffect} from 'react'
import { ColeccionContext } from '../../context/ColeccionContext';
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardDetalle({producto}) {
  const {coleccion, setColeccion} = useContext(ColeccionContext)
  const [Filtrado, setFiltro] = useState([])
  const { id } = useParams()



  const llamada = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(respuesta => setFiltro(respuesta))
      .catch(err => console.log("ERROR", err))
  }
  useEffect(() => {
    llamada()
  }, [id])


  const agregarCarrito = () => {
    coleccion.push(Filtrado)
    console.log(coleccion)
    };


  return (
    <div className='container-box '>
      <div className='container-box '>
        <Card  style={{ width: '30rem' }} className='card-detalle'>
          <Card.Img className='size-img' variant="top" src={Filtrado.image} />
          <Card.Body>
            <Card.Title className='titulo'>{Filtrado.title}</Card.Title>
            <Card.Title className='descripcion'>{Filtrado.description}</Card.Title>
            <Card.Title className='precio'>${Filtrado.price}</Card.Title>
            <Button variant="secondary"  funcion={()=> setColeccion(Filtrado)} >Agregar a carrito</Button>
            <button onClick={agregarCarrito} >Agregar1</button>
          </Card.Body>
        </Card>
      </div>
            {/* <Cards producto={Filtrado}/> o puedo reutilizar una card ya creada.El problema que generó fue que arrastró el boton ver detalle */}

    </div>

  )
}
