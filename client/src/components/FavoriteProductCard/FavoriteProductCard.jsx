import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import {SlBasket, SlTrash } from "react-icons/sl";

export function FavoriteProductCard({ product }) {
    const navigate = useNavigate();

    const { removeFavoriteProduct, addCartProduct } = useContext(ProductContext);

    return (
        <article onClick={() => navigate(`/productDetail/${product.title}`)} style={{cursor: "pointer"}}>
        <div className="container page-wrapper">
  <div className="page-inner">
    <div className="row">
      <div className="el-wrapper">
        <div className="box-up">
          <img className="img" src={product.image} alt={product.title} style={{ width: "250px", height: "180px" }}/>
          <div className="img-info">
            <div className="info-inner">
              <span className="p-name">{product.title}</span>
              <span className="p-company">{product.manufacturer}</span>
            </div>
            <div className="a-size">Relevance: <span className="size">{product.relevance}</span></div>
          </div>
        </div>
        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>

          <a className="cart" href="#">
            <span className="price">{product.price}</span>
            <span className="add-to-cart">
            <span className="txt"><button className="buttonCard" onClick={(e) => {
                addCartProduct(product);
                e.stopPropagation();
                alert(`${product.title} added to cart!`);
            }}>< SlBasket size={25}/></button></span>
              
            <span className="txt"><button className="buttonCard" onClick={(e) => {
                 removeFavoriteProduct(product);
                e.stopPropagation();
                alert(`${product.title} removed from favorites!`);
            }}>< SlTrash  size={25}/></button></span>
            
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </article>
    );
}



