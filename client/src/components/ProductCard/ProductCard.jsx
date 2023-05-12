import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { SlBasket, SlHeart } from "react-icons/sl";
import "./ProductCard.css";

export function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addCartProduct, addFavoriteProduct } = useContext(ProductContext);

  return (
    <article
      onClick={() => navigate(`/productDetail/${product.title}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img
                  className="img"
                  src={product.image}
                  alt={product.title}
                  style={{ width: "250px", height: "180px" }}
                />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{product.title}</span>
                    <span className="p-company">{product.manufacturer}</span>
                  </div>
                  <div className="a-size">
                    Relevance: <span className="size">{product.relevance}</span>
                  </div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <a className="cart" href="#">
                  <span className="price">{product.price}</span>
                  <span className="add-to-cart">
                    <span className="txt">
                      <button
                        className="buttonCard"
                        onClick={(e) => {
                          addFavoriteProduct(product);
                          e.stopPropagation();
                          alert(`${product.title} added to favorites!`);
                        }}
                      >
                        <SlHeart size={25} />
                      </button>
                    </span>
                    <span className="txt">
                      <button
                        className="buttonCard"
                        onClick={(e) => {
                          addCartProduct(product);
                          e.stopPropagation();
                          alert(`${product.title} added to cart!`);
                        }}
                      >
                        <SlBasket size={25} />
                      </button>
                    </span>
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



{/* <Card sx={{ display: 'flex' }}>
<CardMedia component="img" sx={{ width: 165 }} src={product.image} alt={product.title} />
<div onClick={() => navigate(`/productDetail/${product.title}`)} style={{cursor: "pointer"}}>
   
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography component="div" variant="h5">{product.title}</Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">{product.price}</Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">Rate: {product.relevance}</Typography>
    </CardContent>
    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
    <IconButton aria-label="previous">
    <button onClick={(e) => {
        addCartProduct(product);
        e.stopPropagation();
    }}>Add Cart</button>
    </IconButton>
    <IconButton aria-label="next">
    <button onClick={(e) => {
        addFavoriteProduct(product);
        e.stopPropagation();
    }}>< FcLikePlaceholder/></button>
      </IconButton>
    </Box>
    </Box>
</div>
</Card> */

{/* <article onClick={() => navigate(`/productDetail/${product.title}`)} style={{cursor: "pointer"}}>
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
      <span className="txt"><button onClick={(e) => {
        addCartProduct(product);
        e.stopPropagation();
    }}>Agregar al carrito</button></span>
    </span>
  </a>
</div>
</div>
</div>
</div>
</div>
</article> */}}