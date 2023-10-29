import "./style-CartWidget.css"
import Image from 'react-bootstrap/Image';
import Icono from "./assets/carritocompra.svg"
import { ColeccionContext } from "../../context/ColeccionContext";
import React, { createElement, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarritoFloat from "../Card/CarritoFloat";



const CartWidget = () => {
    const { coleccion, setColeccion } = useContext(ColeccionContext)
    useEffect(() => {
    }, [coleccion])


    /*function mostrarCarrito() {
        coleccion.length>=1?document.getElementById("contenedor-float").style.display = "block":document.getElementById("contenedor-float").style.display = "none"
    }

    function ocultarCarrito() {
        document.getElementById("contenedor-float").style.display = "none"
    }*/

    const [mostrarCarrito, setMostrarCarrito] = useState(true)

    const mostrarCarritoFuncion = () => {

        coleccion.length>=1?setMostrarCarrito(!mostrarCarrito): setMostrarCarrito(mostrarCarrito)
    }

    const ocultarCarritoFuncion = () =>{
        setMostrarCarrito(true)
    }


    return (
        <div className="container d-flex">
            <Link to="/ResumenProductos" ><Image onMouseOver={mostrarCarritoFuncion} onMouseOut={ocultarCarritoFuncion} /*onMouseOut={ocultarCarrito}*/ src={Icono} fluid className="cart-widget" /></Link>
            <div>{coleccion.length}</div>
            <div className="contenedor-float" id="contenedor-float" style={mostrarCarrito?{display:"none"}:{display:"block "}}>
                <p>Bienvenido</p>
                {coleccion.map((elm) => {
                    return <CarritoFloat producto={elm} />
                })}
            </div>

        </div>
    )

}

export default CartWidget

