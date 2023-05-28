import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducer/user";
import {sellerReducer} from "./Reducer/seller";
import { productReducer } from "./Reducer/product";
import { eventReducer } from "./Reducer/event";
import { wishlistReducer } from "./Reducer/wishlist";
import { cartReducer } from "./Reducer/cart";
import { orderReducer } from "./Reducer/order";

const Store = configureStore({
    reducer: {
        user: userReducer,
        seller:sellerReducer,
        products:productReducer,
        events:eventReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
        order:orderReducer
    },
    // devTools: process.env.NODE_ENV !== "production",
  });
  
  export default Store;
  