import React, { useState } from "react";
import SideBar from "../../Components/userDashboards/SideBar";
import UserOverview from "../../Components/userDashboards/UserOverview";
import UserProfile from "../../Components/userDashboards/UserProfile";
import UserOrder from "../../Components/userDashboards/UserOrder";
import UserTransaction from "../../Components/userDashboards/UserTransaction";
import UserHelpDesk from "../../Components/userDashboards/UserHelpDesk";

const UserDashboards = () => {
  const [active, setActive] = useState("overview");
  const [show, setShow] = useState(false);
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
          {active === "overview" && <UserOverview/>}
          {active === "profile" && <UserProfile/>}
          {active === "order" && <UserOrder/>}
          {active === "transaction" && <UserTransaction/>}
          {active === "helpdesk" && <UserHelpDesk/>}
        </div>
      </div>
    </>
  );
};

export default UserDashboards;
