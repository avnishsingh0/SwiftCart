import React from "react";

// internal imports
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Footer from "../components/Layout/Footer.jsx";
import Events from "../components/Route/Events/Events.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx";
import Categories from "../components/Route/Categories/Categories.jsx";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.jsx";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Footer />
    </div>
  );
};

export default HomePage;
