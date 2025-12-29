import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div >
        <div className="text-5xl text-center font-bold pt-35">
          <h1>Welcome to my Makeup Store</h1>
        </div>
        <div className="text-2xl text-center w-220 mx-auto  mt-3 ">
          Welcome to Makeup Store, where beauty meets confidence. We offer
          high-quality makeup designed to enhance every look, from natural glow
          to bold glam. Discover products that celebrate individuality,
          creativity, and effortless style.
        </div>
        <div className="text-center mx-auto mt-6 pb-25">
          <Link to={"/Product"}>
            {" "}
            <button className=" border px-4 py-2 font-bold bg-yellow-400 text-green-500 rounded-2xl hover:bg-blue-500 hover:text-white">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
