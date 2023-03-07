import React from "react";
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { TfiHeart} from "react-icons/tfi";

const Product = (props) => {
  
  const handleAddToCart = () => {
    props.setCart(prevCart => [...prevCart, props.data]);
  };
  
  const handleAddToFavorites = () => {
    props.setFavorites(prevFavorites => [...prevFavorites, props.data]);
  };
  

  return (
    <>
      <Link to={`/product?title=${props.data.title}&price=${props.data.price}&image=${props.data.image}&relevance=${props.data.relevance.rate}`}>
        <img src={props.data.image} alt={props.data.title} />
        <h3>{props.data.title.toUpperCase()}</h3>
        <p>Price: {props.data.price}</p>
        <p>Relevance: {props.data.rating.relevance}</p>
        <button onClick={handleAddToCart}> <MdAddShoppingCart /></button>
        <button onClick={handleAddToFavorites}><TfiHeart /></button>

      </Link>
    </>
  );
};

export default Product;
