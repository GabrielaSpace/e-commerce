import React from 'react';
import { Link } from "react-router-dom";
import {SlBasket, SlHeart, SlHome} from "react-icons/sl";
import "./Header.css"


const Header = () => {
  const [value, setValue] = React.useState(0);
  
  return (
    <section className='header'>
       <Link to="/"> <div className='title'>Aurum</div></Link> 

      <div className='navBar'>
      <Link to="/"><SlHome fontSize="large" color='#fff' size={30} /></Link> 
      <Link to="/favorites"><SlHeart fontSize="large" color='#fff' size={30} /></Link>
      <Link to="/cart" ><SlBasket fontSize="large" color='#fff' size={30}/></Link>
      </div>
      
      </section>
  )
}

export default Header

