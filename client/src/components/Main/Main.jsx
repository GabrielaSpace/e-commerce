import React from 'react';
import Products from "./Products/Products";
import Cart from './Cart/Cart';
import {Route, Routes} from "react-router-dom";
 

const Main = () => {
  return (
    <main>
      <h1>welcome</h1>
{     <Routes>
        <Route element={<Products/>} path="/"/>
        <Route element={<Cart/>} path="/cart"/>
      </Routes> }
    </main>
  )
}

export default Main