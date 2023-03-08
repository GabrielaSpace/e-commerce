import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";

export function ProductDetail() {
    const { title } = useParams();
    const { getProduct, getAProvider } = useContext(ProductContext);
    const [product, setProduct] = useState({});
    const [provider, setProvider] = useState({});

    useEffect(() => {
        (async () => {
            let newProduct = await getProduct(title);
            setProduct(newProduct);
        })();
    }, [getAProvider, getProduct, title]);

    return (
        <div>
            {product && (
                <div>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "250px", height: "300px" }}
                    />
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.relevance}</p>
                </div>
            )}
        </div>
    );
}
