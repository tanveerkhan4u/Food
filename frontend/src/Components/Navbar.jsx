import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import zwigato from './images/zwigato.png'
import { CiShoppingCart , CiSearch } from "react-icons/ci";


const Navbar = ( ) => {

  const [menu, setmenu] = useState("home");




  return (
    <>
      <div className='navbar'>
      
           <img src={zwigato} className='zwiagto  object-cover w-16 h-16' alt="" />
           
           <ul className="navbar-menu">
            <Link to="/Home" onClick={() =>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <li onClick={() =>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <Link to="/About" onClick={() =>setmenu("about us")} className={menu==="about us"?"active":""}>Abouts Us</Link>
            <li onClick={() =>setmenu("contact us")} className={menu==="contact us"?"active":""}>Contact Us</li>
           </ul>
         <div className='navbar-search'>
         <CiSearch  className='text-3xl chashma'/>
         <div className='navbar-cart'>
         <CiShoppingCart className='text-3xl chashma'/>
         <div className='dot'></div>
         </div>
         <button >sign in</button>
         </div>
      </div>
    </>
  )
}

export default Navbar;
  
  

 







      
      
      
  