import Product from "../Product";

const Menu = ({products, handleClick, showProducts, filteredProducts, setFilteredProducts}) => { //Renderizar a lista de produtos;
    return (
        <div>
            <ul>
                {products.map((item, index) => {
                    return <Product key={index} products={item} handleClick={handleClick} />
                })}
            </ul>
                <div className="search">
                <input type="text" value={filteredProducts} onChange={(e)=>setFilteredProducts(e.target.value)}/>
                <button onClick={() => showProducts(filteredProducts)}>Pesquisar</button>
            </div>
        </div>
    )
}

export default Menu;