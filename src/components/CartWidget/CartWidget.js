import "./style-CartWidget.css"
import Image from 'react-bootstrap/Image';
import Icono from "./assets/carritocompra.svg"



const CartWidget = () => {
    return (
        <div className="container d-flex">
            <Image src={Icono} fluid className="cart-widget" />
            <div>0</div>
        </div>
    )
}

export default CartWidget