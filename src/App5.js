import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
  
  // const products = ['Product 1', 'Product 2'];
  // const products = useState(['Product 1', 'Product 2']);
  const [products, setProducts] = useState(['Product 1', 'Product 2']);


  function handleAddProduct() {
    // products.push(`New Product ${Date.now()}`);
    // console.log(products);
    setProducts([...products, `New Product ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Products" />

      <img width={300} src={backgroundImage} />;

      <ul>
        {products.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProduct}>Add Product</button>
    </>
  );
}

export default App;