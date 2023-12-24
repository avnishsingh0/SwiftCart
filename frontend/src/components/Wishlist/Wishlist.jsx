import React, { useState } from "react";

// internal imports
import styles from "../../styles/styles";
import { backend_url } from "../../server";
import { addTocart } from "../../Redux/Action/cart";
import { removeFromWishlist } from "../../Redux/Action/wishlist";

// react icons
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 };
    dispatch(addTocart(newData));
    setOpenWishlist(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-full sm:w-1/2 lg:w-1/4 bg-white flex flex-col overflow-y-scroll justify-between shadow-sm hide-scrollbar">
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>Wishlist Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenWishlist(false)}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <AiOutlineHeart size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  {wishlist && wishlist.length} items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {wishlist &&
                  wishlist.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      removeFromWishlistHandler={removeFromWishlistHandler}
                      addToCartHandler={addToCartHandler}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const [value] = useState(1);
  const totalPrice = data.discountPrice * value;

  return (
    <div className="border-b p-4">
      <div className="w-full 800px:flex items-center">
        <RxCross1
          size={30}
          className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mr-1"
          onClick={() => removeFromWishlistHandler(data)}
        />
        <img
          src={`${backend_url}${data?.images[0]}`}
          alt=""
          className="w-[80px] h-min ml-2 mr-2 rounded-[5px] object-cover"
        />

        <div className="pl-[5px]">
          <h1 className="text-[12px] font-semibold">{data.name}</h1>

          <h4 className="font-semibold text-base text-[#d02222]">
            IN ₹{totalPrice}
          </h4>
        </div>
        <div>
          <FaCartArrowDown
            size={20}
            className="cursor-pointer hover:text-red-500"
            tile="Add to cart"
            onClick={() => addToCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
