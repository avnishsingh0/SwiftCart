import React, { useEffect, useState } from "react";

// third party
import styles from "../../../styles/styles";
import { backend_url } from "../../../server";
import { addTocart } from "../../../Redux/Action/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../Redux/Action/wishlist";

// internal imports
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// react-icons
import { RxCross1 } from "react-icons/rx";
import { FaCartPlus } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductDetailsCard = ({ setOpen, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data._id, wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-40">
          <div className="w-3/4 md:w-2/3 h-3/4 md:h-3/4 overflow-y-scroll bg-white rounded-md shadow-lg relative p-4">
            <RxCross1
              size={30}
              className="absolute top-3 right-3 z-50"
              onClick={() => setOpen(false)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img
                  src={`${backend_url}${data.images && data.images[0]}`}
                  alt=""
                  className="w-full h-[20rem] object-contain rounded-md "
                />
                <div className="flex items-center justify-around flex-col md:flex-row mt-3">
                  <Link
                    to={`/shop/preview/${data.shop._id}`}
                    className="flex items-center"
                  >
                    <img
                      src={`${backend_url}${data?.shop?.avatar}`}
                      alt=""
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">
                        {data.shop.name}
                      </h3>
                      <h5 className="pb-3 text-sm">(4.5) Ratings</h5>
                    </div>
                  </Link>

                  <button
                    onClick={handleMessageSubmit}
                    className="relative  inline-flex items-center justify-center px-4 py-2 text-white transition-all duration-300 ease-in-out bg-red-600 rounded-full hover:bg-red-500 focus:outline-none focus:bg-red-600"
                  >
                    <h1 className="flex items-center font-medium cursor-pointer">
                      Send Message <BsMessenger className="ml-1" />
                    </h1>
                  </button>
                </div>

                <h5 className="text-red-500 mt-5">(50) Sold out</h5>
              </div>

              <div className="pt-5 pl-2 pr-2 md:pl-5 md:pr-5">
                <h1
                  className={`${styles.productTitle} text-3xl md:text-2xl font-bold mb-2`}
                >
                  {data.name}
                </h1>
                <p className="text-gray-700 mb-4">{data.description}</p>

                <div className="flex items-center mb-6">
                  <h4
                    className={`${styles.productDiscountPrice} text-2xl font-semibold text-red-600`}
                  >
                    ₹{data.discountPrice}
                  </h4>
                  {data.originalPrice && (
                    <h3
                      className={`${styles.price} text-gray-500 ml-4 text-base line-through`}
                    >
                      ₹ {data.originalPrice}
                    </h3>
                  )}
                </div>
                <div className="flex items-center mb-8">
                  <div className="flex items-center">
                    <button
                      className="bg-red-500 hover:bg-teal-600 text-white font-bold rounded-l px-4 py-2 shadow-lg transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      <span className="text-lg">-</span>
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-2">
                      {count}
                    </span>
                    <button
                      className="bg-red-500 hover:bg-blue-600 text-white font-bold rounded-r px-4 py-2 shadow-lg transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      <span className="text-lg">+</span>
                    </button>
                  </div>

                  <div className="ml-auto">
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                        color="red"
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>

                <button
                  onClick={() => addToCartHandler(data._id)}
                  className="relative inline-flex items-center justify-center px-4 py-2 mt-5 ml-[-5px] text-white transition-all duration-300 ease-in-out border-2 border-red-500 rounded-full hover:bg-red-100  focus:outline-none focus:bg-red-200"
                >
                  <h1 className="flex items-center font-medium cursor-pointer text-black">
                    Add to cart <FaCartPlus className="ml-1" />
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
