import "./style-CartWidget.css"
import Image from 'react-bootstrap/Image';
import Icono from "./assets/carritocompra.svg"
import { ColeccionContext } from "../../context/ColeccionContext";
import React,{useContext, useEffect} from "react";



const CartWidget = () => {
    const {coleccion,setColeccion} = useContext(ColeccionContext)
    
   
    return (
        <div className="container d-flex">
            <Image src={Icono} fluid className="cart-widget" />
            <div>{coleccion.length}</div>
        </div>
    )
}

export default CartWidget