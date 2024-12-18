import React from 'react'
import Navbar from "./components/Navbar";
import  Birinchi from "./components/Birinchi";
import Footer from "./components/Footer";
import Oxirgi from "./components/Oxirgi";
import Services from './pages/Services';
import Uy from "./contacts/Uy";
import Feeter from "./pages/Feeter";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
    <Navbar/>
      <Birinchi/>
      <Footer/>
      <Oxirgi/>
      <Services/>
      <Uy/>
      <Feeter/>
    </div>
  )
}

export default App




