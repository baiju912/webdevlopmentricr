import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const ResturantMenuControl = () => {
  return (
    <>
      <div className=" flex justify-between px-8 py-3 shadow-2xl bg-amber-400 rounded-2xl  mt-3 ">
        <div className=" font-bold text-2xl">Menu Management </div>
        <div className="h-8  shadow-2xl flex items-center gap-1 w-30 border text-green-300 text-center py-1 rounded-xl bg-blue-600 font-bold hover:scale-105 hover:cursor-pointer hover:text-white">
          {" "}
          <IoIosAddCircle className="ms-2" /> Add Items{" "}
        </div>
      </div>

      <div>ResturantMenuControl</div>
    </>
  );
};

export default ResturantMenuControl;
