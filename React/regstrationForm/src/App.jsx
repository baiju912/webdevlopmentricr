import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Regstration from './pages/Regstration';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Toaster/>

    <Header/>
    <Regstration/>
    <Footer/>
    </>
  );
};

export default App;