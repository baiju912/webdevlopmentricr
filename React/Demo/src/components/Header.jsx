import React from "react";
import { Link } from "react-router-dom";

 const Header = () => {
    return (
        <>
        <div className="d-flex justify-content-between p-1 px-4 bg-primary">
            <h3 className=" text-light">My Website</h3>
            <div className="d-flex gap-4 fs-5">
                <Link to={"/"} className="text-light text-decoration-none"> Home</Link>
                <Link to={"/About"} className="text-light text-decoration-none">About</Link>
                <Link to={"/Product"} className="text-light text-decoration-none">Product</Link>
                <Link to={"/Contact"} className="text-light text-decoration-none">Contact</Link>
                

            </div>
        </div>
        
        </>
        
    );
};

export default Header;