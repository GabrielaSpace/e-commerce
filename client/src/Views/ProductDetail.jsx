import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import './ProductDetail.css'
import {SlBasket, SlHeart } from "react-icons/sl";

export function ProductDetail() {
    const { title } = useParams();
    const { getProduct, getAProvider } = useContext(ProductContext);
    const [product, setProduct] = useState({});
    const [provider, setProvider] = useState({});
    const { addCartProduct, addFavoriteProduct } = useContext(ProductContext);
    useEffect(() => {
        (async () => {
            let newProduct = await getProduct(title);
            setProduct(newProduct);
        })();
    }, [getAProvider, getProduct, title]);

    return (
        <article>
            {product && (
               <div id="container">	
	

               <div className="product-details">
                   
                   
               <h1>{product.title}</h1>
           
           
                   <p className="information"> {product.description}</p>
                   <p className="price">Relevance: {product.relevance}</p> 
                   
                    <span className="price">Price: {product.price}</span>
               <div className="control">
           
               <span className="add-to-cart">
              <span className="txt"><button  className="buttonCard" onClick={(e) => {
                addFavoriteProduct(product);
                e.stopPropagation();
                alert(`${product.title} added to favorites!`);
            }}>< SlHeart size={25}/></button></span>
            <span className="txt"><button className="buttonCard" onClick={(e) => {
                addCartProduct(product);
                e.stopPropagation();
                alert(`${product.title} added to cart!`);
            }}>< SlBasket size={25}/></button></span>
            </span>
           
               
           </div>
                       
           </div>
               
               
           <div className="product-image">
               
               <img  src={product.image} alt={product.title} />
           <div className="info">
               <h2>Manufacter details:</h2>
               <ul>
                   <li><strong>Manufacturer: </strong>{product.manufacturer}</li>
                   <li><strong>CIF: </strong>{product.CIF}</li>
                   <li><strong>Address: </strong>{product.address}</li>
                   
               </ul>
           </div>
           </div>
           
           
           
           </div>
           
           
           
            )}
        </article>
    );
}
