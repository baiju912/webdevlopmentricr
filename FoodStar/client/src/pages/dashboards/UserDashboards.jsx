import React, { useState } from "react";
import SideBar from "../../Components/userDashboards/SideBar";
import UserOverview from "../../Components/userDashboards/UserOverview";
import UserProfile from "../../Components/userDashboards/UserProfile";
import UserOrder from "../../Components/userDashboards/UserOrder";
import UserTransaction from "../../Components/userDashboards/UserTransaction";
import UserHelpDesk from "../../Components/userDashboards/UserHelpDesk";

const UserDashboards = () => {

    const [active,setActive] = useState("overview");
  return (
    <>
      <div className="flex w-full h-[88vh]">
        <div className="bg-(--color-background) w-2/10">
          <SideBar active={active} setActive={setActive} />
        </div>
        <div className="border border-amber-700 w-8/10">
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
