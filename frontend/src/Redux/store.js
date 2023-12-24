// internal imports
import { userReducer } from "./Reducer/user";
import { cartReducer } from "./Reducer/cart";
import { eventReducer } from "./Reducer/event";
import { orderReducer } from "./Reducer/order";
import { sellerReducer } from "./Reducer/seller";
import { productReducer } from "./Reducer/product";
import { wishlistReducer } from "./Reducer/wishlist";

// third party
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    events: eventReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default Store;
