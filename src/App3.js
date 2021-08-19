import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Produits</li>
        </ul>
      </Header>
      <Header title="Produits">
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
        </ul>
      </Header>
    </>
  );
}

export default App;