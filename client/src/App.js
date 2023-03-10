import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import { Home } from "./Views/Home";
import { ProductDetail } from "./Views/ProductDetail";
import { Favorites } from "./Views/Favorites";
import { Cart } from "./Views/Cart";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productDetail/:title" element={<ProductDetail />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
