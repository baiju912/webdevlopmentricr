import React from 'react'
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className='flex justify-between bg-blue-500 px-5 py-2 items-center'>
        <div className='text-white text-2xl font-bold'>
            Notes Data 
        </div>
        <div className='flex gap-8 text-center'>
            <Link to={"/"} className=' text-decoration-none text-white bg-blue-500'>
            Home
            </Link>
             <Link to={"/About"} className=' text-decoration-none text-white bg-blue-500'>
            About
            </Link>
             <Link to={"/Contact"} className=' text-decoration-none text-white bg-blue-500'>
            Contact
            </Link>
        </div>
        <div className='flex gap-4'>
            <button className='border h-10 w-20 rounded-xl font-bold text-orange-500 bg-amber-200'>Login</button>
            <button className='border h-10 w-20 rounded-xl font-bold text-orange-500 bg-amber-200'>Register</button>
        </div>
    </div>
    
    
    
    </>
  )
};

export default Header;