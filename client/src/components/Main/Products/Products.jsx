import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListProducts from './ListProducts/ListProducts';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        console.log('Productos recibidos correctamente:', response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchProducts();
  }, [setProducts]);
  

  return (
    <section>
      {products.length > 0 ? (
        <ListProducts data={products}
          cart={cart}
          setCart={setCart}
          favorites={favorites}
          setFavorites={setFavorites}/>
      ) : (
        <p>Cargando productos...</p>
      )}
    </section>
  );
};

export default Products;
