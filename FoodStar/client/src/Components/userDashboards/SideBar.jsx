import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { TbTransactionRupee } from "react-icons/tb";
import { TfiHeadphoneAlt, TfiShoppingCart } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const SideBar = ({ active, setActive, show, setShow }) => {
  const { setUser, setIsLogin } = useAuth();

  const menuItems = [
    { key: "overview", title: "overView", icon: <TbChartTreemap /> },
    { key: "profile", title: "profile", icon: <ImProfile /> },
    { key: "order", title: "order", icon: <TfiShoppingCart /> },
    {
      key: "transactions",
      title: "transactions",
      icon: <TbTransactionRupee />,
    },
    { key: "helpdesk", title: "helpdesk", icon: <TfiHeadphoneAlt /> },
  ];
  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  return (
    <>
      <div className="p-2">
        <div>
          <div className="flex gap-4 h-10 items-center mb-2 font-bold">
            <button onClick={() => setShow(!show)}>
              {show ? (
                <IoCloseSharp className=" hover:cursor-pointer ms-4  text-2xl" />
              ) : (
                <GiHamburgerMenu className=" hover:cursor-pointer ms-4 text-2xl" />
              )}{" "}
            </button>
            <div className="text-xl overflow-hidden text-nowrap text-center font-bold">
              {" "}
              {show && "User Dashboard"}
            </div>
          </div>
          <hr />
          <div className="grid gap-3 p-3">
            <button
              className={`flex gap-3 items-center p-3 h-10 text-nowrap overflow-hidden rounded-xl hover:cursor-pointer hover:scale-110 ${active === "overview" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
              onClick={() => setActive("overview")}
            >
              <TbChartTreemap /> {show && "Overview"}
            </button>
            <button
              className={`flex gap-3 items-center p-3  h-10 rounded-xl text-nowrap overflow-hidden hover:cursor-pointer hover:scale-110 ${active === "profile" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
              onClick={() => setActive("profile")}
            >
              {" "}
              <ImProfile />
              {show && "Profile"}
            </button>
            <button
              className={`flex gap-3 items-center p-3 h-10 rounded-xl text-nowrap overflow-hidden hover:cursor-pointer hover:scale-110 ${active === "order" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
              onClick={() => setActive("order")}
            >
              <FaShoppingCart />
              {show && "Orders"}
            </button>
            <button
              className={`flex gap-3 items-center p-3 h-10 rounded-xl text-nowrap overflow-hidden hover:cursor-pointer hover:scale-110 ${active === "transaction" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
              onClick={() => setActive("transaction")}
            >
              <TbTransactionRupee />
              {show && "Transaction"}
            </button>
            <button
              className={`flex gap-3 items-center p-3 h-10 rounded-xl text-nowrap overflow-hidden hover:cursor-pointer hover:scale-110 ${active === "helpdesk" ? "bg-(--color-secondary) text-white" : "hover:bg-gray-100/70"}`}
              onClick={() => setActive("helpdesk")}
            >
              {" "}
              <TfiHeadphoneAlt />
              {show && "Help Desk"}
            </button>
          </div>
        </div>

        <div className="p-3 pt-25">
          <button
            className={
              "flex gap-3 items-center text-lg ps-2  h-10 rounded-xl w-full text-nowrap overflow-hidden duration-300 hover:cursor-pointer hover:scale-105 hover:bg-red-500 hover:text-white text-red-600 "
            }
            onClick={handleLogout}
          >
            {" "}
            <IoLogOut />
            {show && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
