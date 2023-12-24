import React, { useEffect } from "react";

// third party
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// internal imports
import ShopLogin from "../components/Shop/ShopLogin.jsx";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useSelector((state) => state.seller);
  useEffect(() => {
    if (isSeller === true) {
      navigate(`/dashboard`);
    }
  }, [isLoading, isSeller, navigate]);
  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
