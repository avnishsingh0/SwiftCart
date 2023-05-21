import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);
  if (isLoading === true) {
    if (!isSeller) {
      return <Navigate to={"/shop-login"} replace />;
    }
    return children;
  }

  // Return children if the conditions are not met
  return children;
};

export default SellerProtectedRoute;
