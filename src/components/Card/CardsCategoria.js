import React from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



export default function CardsCategoria({producto1}) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/ProductoFiltrado/${producto1.category}`);
    };

  return (
    
    <div>
      <Card style={{ width: '18rem'}}>
        <Card.Img className='size-img' variant="top" src={producto1.image} />
        <Card.Body>
          <Button variant="secondary  " onClick={handleClick} >{producto1.category}</Button>
        </Card.Body>
      </Card>
    </div>    
  )
}
