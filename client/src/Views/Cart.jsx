import { ProductContext } from "../Context/ProductContext";
import { useContext, useState } from "react";
import { CartProductCard } from "../components/CartProductCard/CartProductCard ";

export function Cart() {
    const { cartProducts } = useContext(ProductContext);

    const getCount = () => {
        let count = 0;
        cartProducts.forEach((product) => {
            count += product.quantity;
        });
        return count;
    };

    const getTotal = () => {
        let total = 0;
        cartProducts.forEach((product) => {
            product.price = product.price.replace("€", "");
            total += parseInt(product.price) * product.quantity;
        });
        return total;
    };

    return (
        <div>
            {
                cartProducts.length > 0 ? (
                    cartProducts.map((product) => (
                        <CartProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <h1>No hay productos en el carrito</h1>
                )
            }
        </div>
    );
}
