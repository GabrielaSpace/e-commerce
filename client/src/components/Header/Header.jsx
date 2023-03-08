import React from 'react';
import { BiBasket} from "react-icons/bi";
import { MdStorefront} from "react-icons/md";
import { TfiHeart} from "react-icons/tfi";
import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <header>
      <Link to="/"><MdStorefront /></Link>
      <Link to="/favorites">< TfiHeart/></Link>
      <Link to="/cart" ><BiBasket /> </Link>
    </header>
  )
}

export default Header

