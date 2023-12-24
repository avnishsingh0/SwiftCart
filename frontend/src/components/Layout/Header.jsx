import React, { useEffect, useRef, useState } from "react";

// internal imports 
import Navbar from "./Navbar.jsx";
import Cart from "../Cart/Cart.jsx";
import DropDown from "./DropDown.jsx";
import styles from "../../styles/styles";
import { backend_url } from "../../server";
import Wishlist from "../Wishlist/Wishlist.jsx";
import { categoriesData } from "../../static/data";

// third party
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// react icons
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { allProducts } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { isSeller } = useSelector((state) => state.seller);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };
  
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchData([]);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={`h-[40px] w-full px-2 border rounded-md transition-colors duration-300 ${
                isFocused ? "border-red-500" : "border-gray-300"
              }`}
            />
            <AiOutlineSearch
              size={25}
              className={`absolute right-2 top-2 cursor-pointer ${
                isFocused ? "text-red-800" : "text-gray-500"
              } transition-colors duration-300`}
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-white shadow-sm z-[9] p-4 rounded-md">
                {searchData.slice(0, 7).map((product) => (
                  <Link key={product._id} to={`/product/${product._id}`}>
                    <div className="flex items-start py-3 transition-opacity duration-300 hover:bg-gray-100">
                      <img
                        src={`${backend_url}${product.images[0]}`}
                        alt=""
                        className="w-[40px] h-[40px] mr-2 rounded-md"
                      />
                      <h1 className="text-sm font-medium">{product.name}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative">
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <button className="relative  inline-flex items-center justify-center px-4 py-2 text-white transition-all duration-300 ease-in-out bg-red-600 rounded-full hover:bg-red-500 focus:outline-none focus:bg-red-600">
                <h1 className="flex items-center font-medium cursor-pointer">
                  {isSeller ? "Go Dashboard" : "Become Seller"}
                  <MdSpaceDashboard className="ml-3" />
                </h1>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`transition bg-[#edf2f8] hidden 800px:flex items-center justify-between w-full h-[70px] sticky top-0 z-10 `}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
          style={{ position: "relative", zIndex: 100 }}
        >
          <div onClick={() => setDropDown(!dropDown)} ref={dropdownRef}>
            <div className="relative h-12 mt-4 w-60 hidden 1000px:block ">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%]  w-full flex justify-between items-center  pl-10 bg-white font-sans text-base font-[500] select-none rounded`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className={`absolute top-5 right-3 cursor-pointer transition-transform duration-300 ${
                  dropDown ? "transform rotate-180" : ""
                }`}
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[20px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="black" />
                <span className="absolute right-0 top-0 rounded-full bg-[#e12626] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[20px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart size={30} color="black" />
                <span className="absolute right-0 top-0 rounded-full bg-[#e12626] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to={"/profile"}>
                    <img
                      src={`${backend_url}${user.avatar}`}
                      alt=""
                      className="w-[45px] h-[45px] rounded-full border-[0px] border-[#e12626]"
                    />
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>
            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>
      {/* mobile header */}

      <div
        className={`w-full h-[60px] bg-[#edf2f8]  left-0 shadow-sm 800px:hidden sticky top-0 z-10`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4 cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setOpen(true)}
            />
          </div>

          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
                className="mt-3 cursor-pointer transition-opacity duration-300 hover:opacity-75"
              />
            </Link>
          </div>

          <div>
            <div
              className="relative mr-6 cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setOpenCart(true)}
            >
             <Link to={"/checkout"}> <AiOutlineShoppingCart size={30} /></Link>
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e12626] w-4 h-4 flex items-center justify-center text-white font-mono text-xs leading-tight">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* header sidebar */}
        {open && (
          <div className="fixed w-full h-full top-0 left-0 bg-[#0000005f] z-20">
            <div className="fixed w-[70%] h-screen top-0 left-0 bg-[#fff] z-10 overflow-y-scroll">
              {/* Close button and wishlist */}
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px] cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    {wishlist.length > 0 && (
                      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e12626] w-4 h-4 flex items-center justify-center text-white font-mono text-xs leading-tight">
                        {wishlist.length}
                      </span>
                    )}
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5 cursor-pointer transition-transform duration-300 hover:scale-110"
                  onClick={() => setOpen(false)}
                />
              </div>

              {/* Search input */}
              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="text"
                  placeholder="Search Product..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className={`h-[40px] w-full px-2 border rounded-md transition-colors duration-300 ${
                    isFocused ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute min-h-[30vh] bg-white shadow-sm z-[19] p-4 rounded-md">
                    {searchData.slice(0, 5).map((product) => (
                      <Link key={product._id} to={`/product/${product._id}`}>
                        <div className="flex items-start py-3 transition-opacity duration-300 hover:bg-gray-100">
                          <img
                            src={`${backend_url}${product.images[0]}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-2 rounded-md"
                          />
                          <h1 className="text-sm font-medium">
                            {product.name}
                          </h1>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Navbar and other content */}
              <Navbar active={activeHeading} />

              {/* Become Seller button */}
              <div className="relative ml-12">
                <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
                  <button className="relative z-10 inline-flex items-center justify-center px-4 py-2 text-white transition-all duration-300 ease-in-out bg-red-600 rounded-full hover:bg-red-500 focus:outline-none focus:bg-red-600">
                    <h1 className="flex items-center font-medium cursor-pointer">
                      {isSeller ? "Go Dashboard" : "Become Seller"}
                      <MdSpaceDashboard className="ml-3" />
                    </h1>
                  </button>
                </Link>
              </div>

              <br />

              {/* User profile */}
              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${backend_url}${user.avatar}`}
                        alt=""
                        className="w-[90px] h-[90px] rounded-full border-[3px] border-[#e12626] cursor-pointer transition-all duration-300 hover:border-white"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7] transition-all duration-300 hover:text-[#e12626]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7] transition-all duration-300 hover:text-[#e12626]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
