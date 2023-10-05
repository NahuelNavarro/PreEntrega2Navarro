import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../Card/Cards'
import Card from 'react-bootstrap/Card';

export default function CardDetalle() {

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

  return (
    <div className='container-box '>
      <div className='container-box '>
        <Card style={{ width: '15rem' }} >
          <Card.Img className='size-img' variant="top" src={Filtrado.image} />
          <Card.Body>
            <Card.Title>{Filtrado.title}</Card.Title>
            <Card.Title>{Filtrado.description}</Card.Title>
            <Card.Title>$ {Filtrado.price}</Card.Title>
          </Card.Body>
        </Card>
      </div>
            {/* <Cards producto={Filtrado}/> o puedo reutilizar una card ya creada. */}

    </div>

  )
}
