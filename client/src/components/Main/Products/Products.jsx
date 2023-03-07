import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListProducts from './ListProducts/ListProducts';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, [setProducts]);

  return (
    <section>
      <ListProducts
        data={products}
        cart={cart}
        setCart={setCart}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </section>
  );
};

export default Products;
