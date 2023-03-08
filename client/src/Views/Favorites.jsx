import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

import { FavoriteProductCard } from "../components/FavoriteProductCard/FavoriteProductCard";

export function Favorites() {
    const { favoriteProducts } = useContext(ProductContext);

    return (
        <div>
            {
                favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <FavoriteProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <h1>No hay productos favoritos</h1>
                )
            }
        </div>
    );
}
