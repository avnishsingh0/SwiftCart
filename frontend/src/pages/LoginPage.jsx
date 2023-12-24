import React, { useEffect } from "react";

// third party
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// internal imports
import Login from "../components/Login/Login.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
