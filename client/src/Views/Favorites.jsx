import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

import { FavoriteProductCard } from "../components/FavoriteProductCard/FavoriteProductCard";

export function Favorites() {
    const { favoriteProducts } = useContext(ProductContext);

    return (
        <div className="sectionView">
        <section> <h1 className="sectionName">My Favorites</h1></section>
        <section>
            {
                favoriteProducts.length > 0 ? (
                    favoriteProducts.map((product) => (
                        <FavoriteProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <h1>No favorites yet</h1>
                )
            }
        </section>
        </div>
    );
}
