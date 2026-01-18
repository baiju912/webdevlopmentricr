import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { TbTransactionRupee } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const SideBar = ({ active, setActive, show, setShow }) => {
  return (
    <>
      <div className="p-2">
        <div className="flex gap-4 items-center mb-2 font-bold text-xl">
          <button onClick={() => setShow(!show)}>
            {show ? (
              <IoCloseSharp className=" hover:cursor-pointer ms-4  text-2xl" />
            ) : (
              <GiHamburgerMenu className=" hover:cursor-pointer ms-4 text-2xl" />
            )}{" "}
          </button>
          <div className="text-xl  text-center font-bold">
            {" "}
            {show && "User Dashboard"}
          </div>
        </div>
        <hr />
        <div className="grid gap-3 p-3">
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:cursor-pointer hover:scale-110 ${active === "overview" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap /> {show && "Overview"}
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:cursor-pointer hover:scale-110 ${active === "profile" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
            onClick={() => setActive("profile")}
          >
            {" "}
            <ImProfile />
            {show && "Profile"}
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:cursor-pointer hover:scale-110 ${active === "order" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
            onClick={() => setActive("order")}
          >
            <FaShoppingCart />
            {show && "Orders"}
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:cursor-pointer hover:scale-110 ${active === "transaction" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
            onClick={() => setActive("transaction")}
          >
            <TbTransactionRupee />
            {show && "Transaction"}
            console.log(show);
            
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl hover:cursor-pointer hover:scale-110 ${active === "helpdesk" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
            onClick={() => setActive("helpdesk")}
          >
            {" "}
            <TfiHeadphoneAlt />
            {show && "Help Desk"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
