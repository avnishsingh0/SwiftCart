import React from "react";

// internal imports
import CountDown from "./CountDown.jsx";
import { backend_url } from "../../../server";
import { addTocart } from "../../../Redux/Action/cart";

// third party
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state?.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart?.find((i) => i?._id === data?._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:w-1/2 m-auto">
        <img
          src={`${backend_url}${data?.images[0]}`}
          alt=""
          className="w-48 sm:w-64"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-xl font-semibold">{data?.name}</h2>
        <p>{data?.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-semibold text-base text-gray-500 pr-3 line-through">
              {data?.originalPrice}$
            </h5>
            <h5 className="font-bold text-lg text-black">
              {data?.discountPrice}$
            </h5>
          </div>
          <span className="pr-3 font-semibold text-base text-green-600">
            {data?.sold_out} sold
          </span>
        </div>
        <CountDown data={data} />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data?._id}?isEvent=true`}>
            <div className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
              See Details
            </div>
          </Link>
          <div
            className="bg-red-500 text-white py-2 px-4 rounded cursor-pointer ml-5"
            onClick={() => addToCartHandler(data)}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
