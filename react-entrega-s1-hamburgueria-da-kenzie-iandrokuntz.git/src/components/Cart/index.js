import "./style.css"

const Cart = ({currentSale, totalPrice}) => {

    return(
        <div className="cart">

            <h3>Cart: R${totalPrice}</h3>

            {currentSale.map((item, index) => (
            <ul className="cartUl">
                <li key={index}><h4>{item.name}</h4></li>
                <li key={index}>{item.category}</li>
                <li key={index}>R$ {item.price}</li>
            </ul>
            ))}
        </div>
    )
}

export default Cart;