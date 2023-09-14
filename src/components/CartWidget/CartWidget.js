import cart from "./assets/306793.svg"
import "./style-CartWidget.css"

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="" className="cart-widget" />
            0
        </div>
    )
}

export default CartWidget