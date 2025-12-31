import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="text-4xl text-center font-bold pt-35">
          <h1>Welcome to my Makeup Store</h1>
        </div>

        <div className="text-1xl text-center w-220 mx-auto  mt-3 ">
          Welcome to Makeup Store, where beauty meets confidence. We offer
          high-quality makeup designed to enhance every look, from natural glow
          to bold glam. Discover products that celebrate individuality,
          creativity, and effortless style.
        </div>
        <div className="text-center mx-auto mt-6 pb-38">
          <Link to={"/Product"}>
            {" "}
            <button className=" border px-4 py-2 shadow-lg font-bold bg-[#3b28cc] text-[#ef233c] rounded-2xl hover:bg-[#f48498] hover:text-white">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
