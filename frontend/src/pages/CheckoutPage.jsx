import React from "react";

// internal imports
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Checkout from "../components/Checkout/Checkout";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <CheckoutSteps active={1} />
      <Checkout />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
