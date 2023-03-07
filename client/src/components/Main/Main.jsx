
import React from 'react';
import Products from "./Products/Products";
import Cart from './Cart/Cart';
import {Route, Routes} from "react-router-dom";

import FormSearch from './FormSearch/FormSearch';



const Main = () => {
  return (
    <main>
       <FormSearch />
 
      <Routes>
        <Route element={<Products/>} path="/"/>
        <Route element={<Cart/>} path="/cart"/>
      </Routes>
    </main>
  )
}

export default Main
