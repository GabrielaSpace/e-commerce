import { useState, useEffect } from 'react';
import axios from 'axios';
import { MdAddShoppingCart, MdWest } from "react-icons/md";
import { TfiHeart} from "react-icons/tfi";

function DetailsProduct(props) {
  const [manufacturer, setManufacturer] = useState('');
  const [cif, setCif] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`mongo/api/providers/${props.data.CIF}`);
        setManufacturer(response.data.name);
        setCif(response.data.cif);
        setAddress(response.data.address);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.data.CIF]);
  
  const handleAddToCart = () => {
    setCart(prevCart => [...prevCart, props.data]);
  };

  const handleAddToFavorites = () => {
    setFavorites(prevFavorites => [...prevFavorites, props.data]);
  };

  return (
    <div>
      <img src={props.data.image} alt={props.data.title} />
      <h3>{props.data.title.toUpperCase()}</h3>
      <p>Price: {props.data.price}</p>
      <p>Relevance: {props.data.relevance}</p>
      <p>Description: {props.data.description}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>CIF: {cif}</p>
      <p>Address: {address}</p>
      <button onClick={handleAddToCart}> <MdAddShoppingCart /></button>
      <button onClick={handleAddToFavorites}><TfiHeart /></button>
      <button onClick={() => history.goBack()}>< MdWest /></button>
    </div>
  );
}

export default DetailsProduct;
