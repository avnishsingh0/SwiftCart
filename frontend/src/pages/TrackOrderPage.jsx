import React from "react";

// internal imports
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import TrackOrder from "../components/Profile/TrackOrder.jsx";

const TrackOrderPage = () => {
  return (
    <div>
      <Header />
      <TrackOrder />
      <Footer />
    </div>
  );
};

export default TrackOrderPage;
