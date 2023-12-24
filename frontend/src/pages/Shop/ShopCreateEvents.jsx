import React from "react";

// internal imports
import CreateEvent from "../../components/Shop/CreateEvent.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopCreateEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={6} />
        </div>
        <div className="w-full justify-center flex">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
};

export default ShopCreateEvents;
