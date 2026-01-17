import React from 'react'
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className='flex justify-between '>
        <div>
            Notes Data 
        </div>
        <div className='flex gap-5'>
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
            <button className='border h-20 w-30 text-green-500 bg-amber-100'>Login</button>
            <button className='border h-20 w-30 text-green-500 bg-amber-100'>Register</button>
        </div>
    </div>
    
    
    
    </>
  )
};

export default Header;