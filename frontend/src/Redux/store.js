import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducer/user";
import {sellerReducer} from "./Reducer/seller";

const Store = configureStore({
    reducer: {
        user: userReducer,
        seller:sellerReducer
    },
  });
  
  export default Store;
  