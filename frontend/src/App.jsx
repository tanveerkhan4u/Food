import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, NavLink, } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Popup from './Components/Popup';



function App() {


  
 const [showPopup, setShowPopup] = useState(false);

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
      <Route path="/About" element={<About />} />
      <Route path="/Popup" element={<Popup showPopup = {showPopup} setShowPopup = {setShowPopup} />} />
      
      
      
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
