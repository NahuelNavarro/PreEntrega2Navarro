import React from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';



export default function TableTotal({producto}) {
  return (
   
      <tr>
        <td><Image className='size-img-resumen' src={producto.image} rounded /></td>
        <td>{producto.title}</td>
        <td>{producto.price}</td>
        <td></td>
      </tr>
   
  )
}
