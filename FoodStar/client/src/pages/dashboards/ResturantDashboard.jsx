import React, { useState } from "react";
import ResturantSideBar from "../../Components/resturantDashboard/ResturantSideBar";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ResturantOverview from "../../Components/resturantDashboard/ResturantOverview";
import ResturantProfile from "../../Components/resturantDashboard/ResturantProfile";
import ResturantOrder from "../../Components/resturantDashboard/ResturantOrder";
import ResturantTransaction from "../../Components/resturantDashboard/ResturantTransaction";
import ResturantMenuControl from "../../Components/resturantDashboard/ResturantMenuControl";

const ResturantDashboard = () => {
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
              You are not login as Resturant Manager. Please Login again.
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex w-full h-[88vh]">
        <div
          className={`bg-(--color-background) duration-400  ${show ? "w-[23%]" : "w-[6%]"}`}
        >
          <ResturantSideBar
            active={active}
            setActive={setActive}
            show={show}
            setShow={setShow}
          />
        </div>
        <div className="border border-amber-700 duration-400 grow">
          {active === "overview" && <ResturantOverview/>}
          {active === "profile" && <ResturantProfile />}
          {active === "order" && <ResturantOrder />}
          {active === "transaction" && <ResturantTransaction />}
          {active === "menu" && <ResturantMenuControl />}
        </div>
      </div>
    </>
  );
};

export default ResturantDashboard;
