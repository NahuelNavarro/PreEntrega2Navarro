import "./style-CartWidget.css"
import Image from 'react-bootstrap/Image';
import Icono from "./assets/carritocompra.svg"
import { ColeccionContext } from "../../context/ColeccionContext";
import React, { createElement, useContext } from "react";



const CartWidget = () => {
    const { coleccion, setColeccion } = useContext(ColeccionContext)

    function mostrarCarrito() {
        if(coleccion.length >=1){        const contenedorProductos = document.querySelector(".contenedorProducto");
        contenedorProductos.innerHTML = "";
    
        coleccion.forEach(producto => {
            
            const div = document.createElement("tr");
            div.innerHTML = `
            <tr>
                <th scope="row"><img src="${producto.image}" class="img-float" alt=""></th>
                <td>${producto.title}</td>
                <td>$${producto.price}</td>   
                <td ><button>X</button></td>   

            </tr>
            `;
            contenedorProductos.appendChild(div);
        });
        }

    };




    return (
        <div className="container d-flex">
            <Image onMouseOver={mostrarCarrito()} src={Icono} fluid className="cart-widget" />
            <div>{coleccion.length}</div>
            <div className="contenedor-float" >
                <div class="carrito">
                    <table class="table table-sm table-dark">
                        <tbody className="contenedorProducto">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default CartWidget

