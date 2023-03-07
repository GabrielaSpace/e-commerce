import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Product from "./Product/Product";

const ListProducts = (props) => {
  return <section>
{props.data.map(product => <Product data={product} key={uuidv4()}/>)}
  </section>;
};

export default ListProducts;