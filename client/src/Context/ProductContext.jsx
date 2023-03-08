import { createContext, useEffect, useState } from "react";
import { getProducts } from "../API/Products";
import { getProvider } from "../API/Provider";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    const getProduct = (title) => {
        return products.find((product) => product.title === title);
    };

    const getAProvider = (id) => {
        return getProvider(id);
    };
    
    return (
        <ProductContext.Provider
            value={{
                products,
                getProduct,
                getAProvider,
                
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
