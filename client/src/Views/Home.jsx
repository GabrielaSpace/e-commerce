import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { ProductCard } from "../components/ProductCard/ProductCard";


export function Home() {
    const { products } = useContext(ProductContext);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const handleOrder = () => {
        switch (order) {
            case "relevance":
                return products.sort((a, b) => parseInt(b.relevance) - parseInt(a.relevance));
            case "price":
                return products.sort((a, b) => parseInt(a.price.split("€")[1]) - parseInt(b.price.split("€")[1]));
            case "alphabet":
                return products.sort((a, b) => {
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                });
            default:
                return products;
        }
    };

    return (
        <div>
            <div>
                <input type="search" name="search" onChange={onChange} />
                <button onClick={() => setOrder("relevance")}>Ordenar Relevancia</button>
                <button onClick={() => setOrder("price")}>Ordenar Precio</button>
                <button onClick={() => setOrder("alphabet")}>Ordenar Albeticamente</button>
            </div>
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
