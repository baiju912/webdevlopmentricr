import React from "react";
import { Link } from "react-router-dom";
 import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className=" flex justify-between px-4 py-2 p-1 bg-orange-500">
        <h3 className=" text-white text-2xl">MakeupStore</h3>
        <div className=" flex gap-6 text-2xl">
          <Link
            to="/"
            className="flex gap-1 text-white text-decoration-none hover:text-green-500 hover:font-bold"
          >
            
           <FaHome className=' mt-1' / > Home
          </Link>
          <Link
            to={"/About"}
            className="text-white text-decoration-none hover:text-green-500 hover:font-bold"
          >
            About
          </Link>
          <Link
            to={"/Product"}
            className="text-white text-decoration-none hover:text-green-500 hover:font-bold"
          >
            Product
          </Link>
          <Link
            to={"/Contact"}
            className="text-white text-decoration-nonev hover:text-green-500 hover:font-bold"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
