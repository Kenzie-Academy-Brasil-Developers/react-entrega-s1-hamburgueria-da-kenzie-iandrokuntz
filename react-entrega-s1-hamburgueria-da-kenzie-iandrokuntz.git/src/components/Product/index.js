import "./style.css"

const Product = ({products: {name, category, id, price}, handleClick}) => {

    

    return (
        <div className="products">
            <ul>
              <li><h4>{name}</h4></li>
              <li>{category}</li>
              <li><h4>R$: {price}</h4></li>
              <button onClick={() => handleClick(id)}>Adicionar ao carrinho</button>  
            </ul>
        </div>
    )
}

export default Product