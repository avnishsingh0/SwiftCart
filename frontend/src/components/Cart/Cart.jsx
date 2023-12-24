import React, { useState } from "react";

// internal imports
import styles from "../../styles/styles";
import { backend_url } from "../../server";
import { addTocart, removeFromCart } from "../../Redux/Action/cart";

// third party library
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// react icons
import { RxCross1 } from "react-icons/rx";
import { FaCartArrowDown } from "react-icons/fa";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10 ">
      <div className="fixed top-0 right-0 h-full w-full sm:w-1/2 lg:w-1/4 bg-white flex flex-col overflow-y-scroll justify-between shadow-sm hide-scrollbar">
        {cart && cart.length === 0 ? (
          <div className="flex items-center justify-center h-screen">
            <div className="fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            <h5>Cart Items are empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenCart(false)}
                />
              </div>
              {/* Item length */}
              <div className="flex items-center p-4">
                <FaCartArrowDown size={20} />
                <h5 className="pl-2 text-xl font-semibold">
                  {cart && cart.length} items in your cart
                </h5>
              </div>

              {/* cart Single Items */}
              <div className="border-t">
                {cart &&
                  cart.map((item, index) => (
                    <CartSingle
                      key={index}
                      data={item}
                      quantityChangeHandler={quantityChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>
            </div>

            <div className="px-5 mb-2">
              {/* checkout buttons */}
              <Link to="/checkout">
                <button className="relative  inline-flex items-center justify-center px-9 py-3 ml-5 text-white transition-all duration-300 ease-in-out bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-600">
                  <h1 className="flex items-center font-medium cursor-pointer">
                    Checkout ₹{totalPrice}
                    <MdOutlineShoppingCartCheckout className="ml-10  font-bold" />
                  </h1>
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;

  const increment = (data) => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => increment(data)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{data.qty}</span>
          <div
            className="bg-[#d5deea] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => decrement(data)}
          >
            <HiOutlineMinus size={16} color="#23180d" />
          </div>
        </div>
        <img
          src={`${backend_url}${data?.images[0]}`}
          alt=""
          className="w-[80px] h-min ml-2 mr-2 rounded-[5px] object-cover"
        />
        <div className="pl-2">
          <h1 className="text-[12px] font-semibold">{data.name}</h1>
          <h4 className="font-normal text-sm text-black mt-2">
            ₹{data.discountPrice} * {value}
          </h4>
          <h4 className="font-semibold text-base text-[#d02222]">
            IN ₹{totalPrice}
          </h4>
        </div>

        <RxCross1
          className="cursor-pointer text-3xl"
          onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Cart;
