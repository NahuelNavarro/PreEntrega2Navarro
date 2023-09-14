import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Zapatos</button>
                <button>Borcegos</button>
                <button>Pantuflas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar