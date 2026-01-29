import React, { useState } from "react";
import SideBar from "../../Components/userDashboards/SideBar";
import UserOverview from "../../Components/userDashboards/UserOverview";
import UserProfile from "../../Components/userDashboards/UserProfile";
import UserOrder from "../../Components/userDashboards/UserOrder";
import UserTransaction from "../../Components/userDashboards/UserTransaction";
import UserHelpDesk from "../../Components/userDashboards/UserHelpDesk";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserDashboards = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  if (role !== "customer") {
    return (
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">⊗</div>
            <div className="text-xl">
              You are not login as Customer. Please Login again.
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
          className={`bg-(--color-background) duration-400  ${show ? "w-[20%]" : "w-[6%]"}`}
        >
          <SideBar
            active={active}
            setActive={setActive}
            show={show}
            setShow={setShow}
          />
        </div>
        <div className="border border-amber-700 duration-400 grow">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "order" && <UserOrder />}
          {active === "transaction" && <UserTransaction />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboards;
