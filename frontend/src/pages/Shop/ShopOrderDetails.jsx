import React from "react";

// internal imports
import Footer from "../../components/Layout/Footer";
import OrderDetails from "../../components/Shop/OrderDetails.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";

const ShopOrderDetails = () => {
  return (
    <div>
      <DashboardHeader />
      <OrderDetails />
      <Footer />
    </div>
  );
};

export default ShopOrderDetails;
