import React from 'react'
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiMoneyEuroBoxFill } from "react-icons/ri";
import { RiMoneyPoundCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <>
    <div className=' flex justify-center items-center gap-4 align-middle bg-blue-500 text-center  py-3  text-white text-3xl'>
       <RiMoneyRupeeCircleFill className=' animate-bounce' />
       <RiMoneyDollarCircleFill className='  animate-spin' />
       <span className=' font-bold '> Currency Converter</span>
       <RiMoneyEuroBoxFill className=' animate-pulse' />
       <RiMoneyPoundCircleFill className=' animate-ping' />


        
    </div>
    </>
  );
};

export default Header;