import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, NavLink, } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';


function App() {
  const [showPopup, setShowPopup] = React.useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };




  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Navbar" element={<Navbar HandlePopup = {HandlePopup}/>} />
      <Route path="/Login" element={<Login showPopup = {showPopup} setShowPopup = {setShowPopup}/>} />
      
      
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
