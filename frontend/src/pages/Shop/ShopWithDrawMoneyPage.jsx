import React from "react";

// internal imports
import WithdrawMoney from "../../components/Shop/WithdrawMoney.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopWithDrawMoneyPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={7} />
        </div>
        <WithdrawMoney />
      </div>
    </div>
  );
};

export default ShopWithDrawMoneyPage;
