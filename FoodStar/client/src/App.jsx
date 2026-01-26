import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import UserDashboards from "./pages/dashboards/UserDashboards";
import RiderDashboard from "./pages/dashboards/RiderDashboard";
import ResturantDashboard from "./pages/dashboards/ResturantDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<UserDashboards />} />
           <Route path="/resturant-dashboard" element={<ResturantDashboard />} />
            <Route path="/rider-dashboard" element={<RiderDashboard />} />
             <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
};

export default App;
