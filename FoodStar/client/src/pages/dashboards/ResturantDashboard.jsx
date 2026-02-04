import React, { useState, useEffect } from "react";
import RestaurantSideBar from "../../Components/resturantDashboard/RestaurantSideBar.jsx"
import RestaurantOverview from "../../Components/resturantDashboard/RestaurantOverview.jsx";
import RestaurantProfile from "../../Components/resturantDashboard/RestaurantProfile.jsx";
import RestaurantMenu from "../../Components/resturantDashboard/RestaurantMenu.jsx";
import RestaurantOrders from "../../Components/resturantDashboard/RestaurantOrders.jsx";
import RestaurantEarnings from "../../Components/resturantDashboard/RestaurantEarnings.jsx";
import RestaurantHelpDesk from "../../Components/resturantDashboard/RestaurantHelpDesk.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const RestaurantDashboard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  if (role !== "manager") {
    return (
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">⊗</div>
            <div className="text-xl">
              You are not logged in as Restaurant Manager. Please login again.
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div
          className={`bg-(--color-background) duration-300 ${
            show ? "w-2/60" : "w-12/60"
          }`}
        >
          <RestaurantSideBar
            active={active}
            setActive={setActive}
            show={show}
            setShow={setShow}
          />
        </div>
        <div className={`${show ? "w-58/60" : "w-48/60"} duration-300`}>
          {active === "overview" && <RestaurantOverview />}
          {active === "profile" && <RestaurantProfile />}
          {active === "menu" && <RestaurantMenu />}
          {active === "orders" && <RestaurantOrders />}
          {active === "earnings" && <RestaurantEarnings />}
          {active === "helpdesk" && <RestaurantHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default RestaurantDashboard;