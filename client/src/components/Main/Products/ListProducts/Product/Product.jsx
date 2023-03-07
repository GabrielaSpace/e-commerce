import React from "react";
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { TfiHeart} from "react-icons/tfi";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
  
  const handleAddToCart = () => {
    props.setCart(prevCart => [...prevCart, props.data]);
  };
  
  const handleAddToFavorites = () => {
    props.setFavorites(prevFavorites => [...prevFavorites, props.data]);
  };
  

  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${props.data.image}`} alt={props.data.title} style={{ width: '250px', height: '300px' }} />

      <Card.Body>
      <Link to={`/product?title=${props.data.title}&price=${props.data.price}&image=${props.data.image}&relevance=${props.data.relevance}`}>
      <Card.Title> {props.data.title.toUpperCase()}</Card.Title>
      </Link>
      <Card.Text>Price: {props.data.price}</Card.Text>
      <Card.Text className="mb-2 text-muted">Relevance: {props.data.relevance}</Card.Text>
      
      <Button  variant="primary" onClick={handleAddToCart}> <MdAddShoppingCart /></Button>
      <button onClick={handleAddToFavorites}><TfiHeart /></button>
      </Card.Body>
      </Card>
    </>
  );
};

export default Product;
