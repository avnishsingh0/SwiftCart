import React from "react";

// internal imports
import animationData from "../../../assets/simple_animations/Business Team.json";

// third party
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <>
      <div className="bg-[#edf2f8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-8">
              Welcome to our Online Store
            </h1>
            <p className="text-lg sm:text-xl lg:text-xl text-gray-600 mb-12">
              Discover our exquisite Best Collection for Home Decoration,
              featuring elegant decor pieces that will transform your living
              space into a haven of style and sophistication. Elevate your home
              with our curated selection.
            </p>
            <button className="relative  inline-flex items-center justify-center px-4 py-2 text-white transition-all duration-300 ease-in-out bg-red-600 rounded-full hover:bg-red-500 focus:outline-none focus:bg-red-600">
              <Link to={"/products"}>
                <h1 className="flex items-center font-medium cursor-pointer">
                  Shop now
                  <FaShoppingBag className="ml-3" />
                </h1>
              </Link>
            </button>
          </div>

          <div className="w-full sm:w-1/2  sm:mt-0">
            <Lottie options={defaultOptions} width={350} height={400} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
