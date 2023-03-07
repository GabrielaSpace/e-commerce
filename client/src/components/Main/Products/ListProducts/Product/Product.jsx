import React from "react";
import { Link } from 'react-router-dom';

const Product = (props) => {
  
  const handleAddToCart = () => {
    setCart(prevCart => [...prevCart, props.data]);
  };

  const handleAddToFavorites = () => {
    setFavorites(prevFavorites => [...prevFavorites, props.data]);
  };

  return (
    <>
      <Link to={`/product?title=${props.data.title}&price=${props.data.price}&image=${props.data.image}&rating=${props.data.rating.rate}`}>
        <img src={props.data.image} alt={props.data.title} />
        <h3>{props.data.title.toUpperCase()}</h3>
        <p>Price: {props.data.price}</p>
        <p>Relevance: {props.data.rating.rate}</p>
        <button onClick={handleAddToCart}> <MdAddShoppingCart /></button>
        <button onClick={handleAddToFavorites}><TfiHeart /></button>

      </Link>
    </>
  );
};

export default Product;

