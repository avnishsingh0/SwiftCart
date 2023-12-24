import React, { useState } from "react";
import { Link } from "react-router-dom";

// internal imports
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

// react icons
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoCloudDone } from "react-icons/io5";

const Footer = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="bg-white text-black ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-white py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-red-500">Subscribe</span> to get news, events,
          and offers
        </h1>
        <div className="flex">
          <input
            type="text"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Enter your email..."
            className={`h-[40px] w-full px-2 border rounded-md transition-colors duration-300 ${
              isFocused ? "border-red-500" : "border-gray-300"
            }`}
          />
          <button className="relative  inline-flex items-center justify-center px-4 py-2 text-white transition-all duration-300 ease-in-out bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-600">
            <h1 className="flex items-center font-medium cursor-pointer">
              submit
              <IoCloudDone className="ml-3" />
            </h1>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 py-16 sm:text-center">
        <ul className="text-center sm:text-left">
          <li className="mb-6">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
              className="w-24 mx-auto sm:mx-0"
            />
          </li>
          <li className="mb-6">
            <p className="text-black text-sm">
              The home and elements needed to create beautiful products.
            </p>
          </li>
          <li className="flex items-center justify-center">
            <AiFillFacebook size={25} className="cursor-pointer mr-4" />
            <AiOutlineTwitter size={25} className="cursor-pointer mr-4" />
            <AiFillInstagram size={25} className="cursor-pointer mr-4" />
            <AiFillYoutube size={25} className="cursor-pointer" />
          </li>
        </ul>

        <ul className="text-center sm:text-left text-red-700 font-bold ">
          <h1 className="mb-6 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index} className="mb-3">
              <Link
                className="text-black hover:text-red-500 transition duration-300 text-sm cursor-pointer"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-left text-red-600 font-bold">
          <h1 className="mb-6 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index} className="mb-3">
              <Link
                className="text-black hover:text-red-500 transition duration-300 text-sm cursor-pointer"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-left text-red-600 font-bold">
          <h1 className="mb-6 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index} className="mb-3">
              <Link
                className="text-black hover:text-red-500 transition duration-300 text-sm cursor-pointer"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
 text-center pt-2 text-black text-sm pb-8"
      >
        <span>© 2023 Avnish Singh. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
