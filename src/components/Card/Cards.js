import React from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export default function Cards({producto}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/DetalleProducto/${producto.id}`);
    };
  return (
    <div>
      <Card style={{ width: '15rem'}}>
        <Card.Img className='size-img' variant="top" src={producto.image} />
        <Card.Body>
          <Card.Title >{producto.title}</Card.Title>
          <Card.Title>${producto.price}</Card.Title>
          <Button id ={`${producto.id}`} onClick={handleClick} variant="secondary">Detalle</Button>
        </Card.Body>
      </Card>
    </div>    
  )
}

