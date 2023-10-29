import React from 'react'
import { ColeccionContext } from "../../context/ColeccionContext";
import {useContext,useEffect,useState} from 'react';
import TableTotal from '../Card/TableTotal';
import Table from 'react-bootstrap/Table';



export default function ResumenProductos() {
    const { coleccion, setColeccion } = useContext(ColeccionContext)


    useEffect(() => {
      }, [coleccion])

      const [suma,setSuma] = useState()

      const sumarTotal = () => {
        const buscar= coleccion.map(x=>x.cantidad )
       
        
            };

      useEffect(() => {
        sumarTotal()
      }, [suma])


  return (

    <div className='container-box '>
          <div>Total${suma}</div>

          
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
    {coleccion.map((elm)=>{
            return <TableTotal producto={elm}/> 
            })}
      
    </tbody>
  </Table>
    </div>
   
    
    )
  
}
