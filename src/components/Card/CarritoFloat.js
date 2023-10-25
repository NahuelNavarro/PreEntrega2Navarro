import React from 'react'
import "./style.css"
import { ColeccionContext } from "../../context/ColeccionContext";
import {useContext,useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';



export default function CarritoFloat({producto}) {

    const { coleccion, setColeccion } = useContext(ColeccionContext)
    useEffect(() => {
    console.log(coleccion)
    }, [coleccion])


  return (
    
    <div>
   
      <tbody>
        <tr>
          <td>{producto.title}</td>
          <td>${producto.price}</td>
        </tr>
      </tbody>
      
    </div>
  )
}
