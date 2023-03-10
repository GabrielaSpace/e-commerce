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
        <div className="sectionView">
        <section><h1 className="sectionName">My cart</h1> </section>
        <section>
            {
                cartProducts.length > 0 ? (
                    cartProducts.map((product) => (
                        <article>
                        <CartProductCard key={product.id} product={product} />
                        </article>
                    ))
                ) : (
                    <h1>There are no products in the cart yet.</h1>
                )
            }
            
           
             
        </section>
         <article className="subTotal" >
         <h3>Quantity of products: {getCount()} </h3>

         <h3>Total amount to pay: : € {getTotal()}</h3>
         </article>
         </div>
    );
}
