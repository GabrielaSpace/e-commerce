import { ProductContext } from "../../Context/ProductContext";
import { useContext } from "react";

export function CartProductCard({ product }) {
    const { removeCartProduct } = useContext(ProductContext);

    return (
        <div>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: "250px", height: "300px" }}
            />
            <h1>{product.title}</h1>
            <p>Quantity: {product.quantity}</p>
            <p>{product.price}</p>
            <p>{product.relevance}</p>
            <button onClick={() => removeCartProduct(product)}>Eliminar</button>
        </div>
    );
}
