import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, NavLink, } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Popup from './Components/Popup';



function App() {
 const [showPopup, setshowPopup] = React.useState(false);
 const HandlePopup = () => {
    setshowPopup(true);
 };





  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/About" element={<About />} />
      <Route path="/Popup" element={<Popup showPopup={showPopup} setshowPopup={setshowPopup} />} />
      
      
      
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
