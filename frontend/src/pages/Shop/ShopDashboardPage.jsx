import React from "react";

// internal imports
import DashboardHero from "../../components/Shop/DashboardHero.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader.jsx";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopDashboardPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[265px]">
          <DashboardSideBar active={1} />
        </div>
        <DashboardHero />
      </div>
    </div>
  );
};

export default ShopDashboardPage;
