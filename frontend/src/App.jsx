import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, NavLink, } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Popup from './Components/Popup';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Card from './Components/Card';
import Contact from './Components/Contact';



function App() {


  
 
  
  
  const [showPopUp, setShowPopUp] = useState(false);
  
  return (
    <>
  
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Card" element={<Card />} />
      <Route path="/Navbar" element={<Navbar setShowPopUp={setShowPopUp} />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Popup" element={!showPopUp ? <Popup/>:<></>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;

      
      
      

