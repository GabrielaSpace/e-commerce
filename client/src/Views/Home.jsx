import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { ProductCard } from "../Components/ProductCard";

export function Home() {
    const { products } = useContext(ProductContext);
    const [search, setSearch] = useState("");
   
    const onChange = (e) => {
        setSearch(e.target.value);
    };

  
    return (
        <div>
            
            {products.map(
                (product) =>
                    handleOrder(products) &&
                    product.title.toLowerCase().includes(search.toLowerCase()) && (
                        <ProductCard product={product} />
                    )
            )}
        </div>
    );
}
