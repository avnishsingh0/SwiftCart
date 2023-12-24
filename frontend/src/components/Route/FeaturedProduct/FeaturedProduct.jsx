import React from "react";

// internal imports
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

// third party
import { useSelector } from "react-redux";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts &&
            allProducts?.map((i, index) => (
              <ProductCard data={i} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
