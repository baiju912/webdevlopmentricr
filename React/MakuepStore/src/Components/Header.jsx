import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className=" flex justify-between px-4 py-2 p-1 bg-orange-500">
            <h3 className=" text-white text-2xl">MakeupStore</h3>
            <div className=" flex gap-6 text-2xl">
                <Link to="/" className=" text-white text-decoration-none"> Home</Link>
                <Link to={"/About"} className="text-white text-decoration-none">About</Link>
                <Link to={"/Product"} className="text-white text-decoration-none">Product</Link>
                <Link to={"/Contact"} className="text-white text-decoration-none">Contact</Link>
                

            </div>
        </div>
    
    
    </>
  );
};

export default Header;