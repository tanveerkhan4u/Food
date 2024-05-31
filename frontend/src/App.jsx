import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, NavLink, } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Login" element={<Login />} />
      
      
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
