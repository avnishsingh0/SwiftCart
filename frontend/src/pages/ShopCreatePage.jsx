import React, { useEffect } from "react";

// third party
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// internal imports
import ShopCreate from "../components/Shop/ShopCreate";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state?.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller?._id}`);
    }
  }, [isSeller, navigate, seller?._id]);
  return (
    <div>
      <ShopCreate />
    </div>
  );
};

export default ShopCreatePage;
