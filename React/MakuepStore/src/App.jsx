import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";


function App() {
  return(
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    
    </>
  );
};

export default App;