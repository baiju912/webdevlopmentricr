import React, { Component } from 'react'


const Header = () => {
  return (
    <>
    <div className='flex justify-between py-1   px-10  rounded bg-[#00b4d8]'>
        <div className='flex  gap-15'>
            <img className='h-12 w-12  object-cover rounded-4xl' src="/image/image.png" alt="logo" />
            <p className=' text-4xl  text-white font-bold'>Raj Institute</p>
        </div>
        <div className='pt-1'>
            <button className=' h-auto w-28 py-2 text-white rounded bg-[#ffbd00] hover:font-bold hover:bg-amber-700'>Student Login</button>
        </div>
    </div>
    </>
  );
};

export default Header;