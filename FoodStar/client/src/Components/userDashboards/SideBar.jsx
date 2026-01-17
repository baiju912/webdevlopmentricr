import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { FaSuperpowers } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl flex gap-3 text-center font-bold"><GiHamburgerMenu  className=" mt-1"/> User Dashboard</div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:scale-110 ${active==="overview" ? "bg-(--color-secondary) text-white" :"hover:bg-gray-100/70"}`}
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap /> Overview
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:scale-110 ${active==="profile" ? "bg-(--color-secondary) text-white" :"hover:bg-gray-100/70"}`}
           
            onClick={() => setActive("profile")}
          >
            {" "}
            <ImProfile />
            Profile
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:scale-110 ${active==="order" ? "bg-(--color-secondary) text-white" :"hover:bg-gray-100/70"}`}
            
            onClick={() => setActive("order")}
          >
            <FaShoppingCart />
            Orders
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:scale-110 ${active==="transaction" ? "bg-(--color-secondary) text-white" :"hover:bg-gray-100/70"}`}
           
            onClick={() => setActive("transaction")}
          >
            <BiTransfer />
            Transaction
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:scale-110 ${active==="helpdesk" ? "bg-(--color-secondary) text-white" :"hover:bg-gray-100/70"}`}
            
            onClick={() => setActive("helpdesk")}
          >
            {" "}
            <FaSuperpowers />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
