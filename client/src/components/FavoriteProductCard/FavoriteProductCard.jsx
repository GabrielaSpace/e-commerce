import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

export function FavoriteProductCard({ product }) {
    const { removeFavoriteProduct } = useContext(ProductContext);

    return (
        <div>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: "250px", height: "300px" }}
            />
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.relevance}</p>
            <button onClick={() => removeFavoriteProduct(product)}>Eliminar</button>
        </div>
    );
}
