import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { ProductCard } from "../components/ProductCard/ProductCard";

import './Home.css'

export function Home() {
    const { products } = useContext(ProductContext);
    const [search, setSearch] = useState("");
    const [orderType, setOrderType] = useState("");
    const [orderDirection, setOrderDirection] = useState("asc");

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    const handleOrder = () => {
        switch (orderType) {
            case "relevance":
                return products.sort((a, b) => {
                    if (orderDirection === "asc") {
                        return parseInt(b.relevance) - parseInt(a.relevance);
                    } else {
                        return parseInt(a.relevance) - parseInt(b.relevance);
                    }
                });
            case "price":
                return products.sort((a, b) => {
                    if (orderDirection === "asc") {
                        return parseInt(a.price.split("€")[1]) - parseInt(b.price.split("€")[1]);
                    } else {
                        return parseInt(b.price.split("€")[1]) - parseInt(a.price.split("€")[1]);
                    }
                });
            case "alphabet":
                return products.sort((a, b) => {
                    if (orderDirection === "asc") {
                        if (a.title < b.title) {
                            return -1;
                        }
                        if (a.title > b.title) {
                            return 1;
                        }
                        return 0;
                    } else {
                        if (a.title < b.title) {
                            return 1;
                        }
                        if (a.title > b.title) {
                            return -1;
                        }
                        return 0;
                    }
                });
            default:
                return products;
        }
    };

    const handleClickOrder = (type) => {
        if (type === orderType) {
            if (orderDirection === "asc") {
                setOrderDirection("desc");
            } else {
                setOrderDirection("asc");
            }
        } else {
            setOrderType(type);
            setOrderDirection("asc");
        }
    };

    return (
        <div>
            <section>
                <input type="search" name="search" onChange={onChange} placeholder="Search" />
                <div>
                    <button className="buttonCard" onClick={() => handleClickOrder("relevance")}>
                        <p className="filter">Relevance</p>
                    </button>
                    <button className="buttonCard" onClick={() => handleClickOrder("price")}>
                        <p className="filter">Price</p>
                    </button>
                    <button className="buttonCard" onClick={() => handleClickOrder("alphabet")}>
                        <p className="filter">A-Z </p>
                    </button>
                </div>
            </section>
            <section>
                {handleOrder().map(
                    (product) =>
                        product.title.toLowerCase().includes(search.toLowerCase()) && (
                            <ProductCard product={product} key={product.id} />
                        )
                )}
            </section>
        </div>
    );
}
