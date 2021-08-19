import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
  
  // const products = ['Product 1', 'Product 2'];
  // const products = useState(['Product 1', 'Product 2']);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('products').then(response => 
      {
        //console.log(response);
        setProducts(response.data);
      });
	}, []);

  async function handleAddProduct() {
    // products.push(`New Product ${Date.now()}`);
    // console.log(products);
    // setProducts([...products, `New Product ${Date.now()}`]);
    const response = await api.post('products', 
      {
        name: `Chemise en cotton ${Date.now()}`,
        price: 70
      }
    );

    const project = response.data;

    setProducts([...products, project]);
  }

  return (
    <>
      <Header title="Products" />

      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProduct}>Add Product</button>
    </>
  );
}

export default App;