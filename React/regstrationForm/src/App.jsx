import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Regstration from './pages/Regstration';
import { Toaster } from "react-hot-toast";
import CoachingRegForm from './pages/CoachingRegForm';

const App = () => {
  return (
    <>
    <Toaster/>

    <Header/>
    {/* <Regstration/> */}
    <CoachingRegForm/>
    <Footer/>
    </>
  );
};

export default App;