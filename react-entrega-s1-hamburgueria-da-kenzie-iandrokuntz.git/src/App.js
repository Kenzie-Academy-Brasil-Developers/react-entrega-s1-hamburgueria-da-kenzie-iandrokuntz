import { useState } from 'react';
import Cart from "./components/Cart";
import Menu from './components/Menu';
import './App.css';

function App() {

    const [products, setProducts] = useState([
      { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
      { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
      { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
      { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
      { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
      { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
      { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
    ]); 

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([])
  
    const showProducts = (productsToFind) => {

      const output = products.filter((filter) => filter.name.toLowerCase().includes(productsToFind.toLowerCase()))
      
      setProducts(output)
    }

    const handleClick = (productID) => {
      const output = products.find((item) => item.id === productID);
      if (!currentSale.includes(output)){
        setCurrentSale([...currentSale, output])
      }
    }

  const totalPrice = currentSale.reduce((acc, item) => acc + item.price, 0).toFixed(2)


  return (
    <div className="App">
      <div className="logo">
        <h1>Burguer</h1>
        <h4>Kenzie</h4>
      </div>
      <Cart products={products} currentSale={currentSale} totalPrice={totalPrice}/>
      <Menu filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} showProducts={showProducts} products={products} handleClick={handleClick}/>
    </div>
  );
}

export default App;
