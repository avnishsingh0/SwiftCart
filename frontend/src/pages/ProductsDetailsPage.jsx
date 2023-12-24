import React, { useEffect, useState } from "react";

// third party
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

// internal imports
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";

const ProductsDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { _id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");
  console.log(eventData);
  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === _id);
      setData(data);
    } else {
      const data = allProducts && allProducts.find((i) => i._id === _id);
      setData(data);
    }
  }, [data, allProducts, eventData, allEvents, _id]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductsDetailsPage;
