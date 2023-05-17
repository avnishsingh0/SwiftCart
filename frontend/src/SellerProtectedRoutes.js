
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({isSeller,seller, children }) => {
  if(!isSeller){
    return <Navigate to={`/shop-login`}/>
  }
  return children
};

export default SellerProtectedRoute;