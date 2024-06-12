import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import zwigato from './images/zwigato.png'
import { CiShoppingCart , CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";


const Navbar = ({setShowPopUp} ) => {

  const [menu, setmenu] = useState("home");
   



  return (
    <>
      <div className='navbar'>
      <Link to="">
           <img src={zwigato} className='zwiagto  object-cover w-16 h-16' alt="" />
           </Link>
           <ul className="navbar-menu">
            <Link to="/" onClick={() =>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <li onClick={() =>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <Link to="/About" onClick={() =>setmenu("about us")} className={menu==="about us"?"active":""}>Abouts Us</Link>
            <li onClick={() =>setmenu("contact us")} className={menu==="contact us"?"active":""}>Contact Us</li>
           </ul>
         <div className='navbar-search'>
    
         <div className='navbar-cart'>
         <CiShoppingCart className='text-3xl  chashma'/>
         <div className='dot'></div>
         </div>
         <Link to="/Popup">
         <button onClick={setShowPopUp}>Log in</button>
         </Link>
        
         </div>
      </div>
    </>
  )
}

export default Navbar;
  
  

 







      
      
      
  