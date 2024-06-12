import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, NavLink, } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Popup from './Components/Popup';
import Footer from './Components/Footer';



function App() {


  
 
  
  
  const [showPopUp, setShowPopUp] = useState(false);
  
  return (
    <>
  
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Navbar" element={<Navbar setShowPopUp={setShowPopUp} />} />
      <Route path="/About" element={<About />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Popup" element={!showPopUp ? <Popup/>:<></>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;

      
      
      

