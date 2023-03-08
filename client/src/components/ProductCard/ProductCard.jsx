import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

export function ProductCard({ product }) {
    const navigate = useNavigate();
    const { addCartProduct} = useContext(ProductContext);

    return (
        <div onClick={() => navigate(`/productDetail/${product.title}`)} style={{cursor: "pointer"}}>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: "250px", height: "300px" }}
            />
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.relevance}</p>
            <button onClick={(e) => {
                addCartProduct(product);
                e.stopPropagation();
            }}>Agregar al carrito</button>

           
        </div>
    );
}
