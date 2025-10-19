import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/User/userSlice";
import cartReducer from './Features/Cart/cartSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
