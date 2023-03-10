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

    const addFavoriteProduct = (product) => {
        if (favoriteProducts.includes(product)) {
            return;
        }

        setFavoriteProducts([...favoriteProducts, product]);
    };

    const removeFavoriteProduct = (product) => {
        setFavoriteProducts(
            favoriteProducts.filter((favoriteProduct) => {
                return favoriteProduct.title !== product.title;
            })
        );
    };

    const addCartProduct = (product) => {
        if (cartProducts.includes(product)) {
            cartProducts.forEach((cartProduct) => {
                if (cartProduct.title === product.title) {
                    cartProduct.quantity++;
                }
            });
            
            return;
        }

        product.quantity = 1;

        setCartProducts([...cartProducts, product]);
    };

    const removeCartProduct = (product) => {
        if (product.quantity > 1) {
            product.quantity--;
            return setCartProducts([...cartProducts]);
        }

        setCartProducts(
            cartProducts.filter((cartProduct) => {
                return cartProduct.title !== product.title;
            })
        );
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                getProduct,
                getAProvider,
                favoriteProducts,
                addFavoriteProduct,
                removeFavoriteProduct,
                cartProducts,
                addCartProduct,
                removeCartProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
