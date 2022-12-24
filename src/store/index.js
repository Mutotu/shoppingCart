import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import userSLice from "./user.slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    user: userSLice.reducer,
  },
});

export default store;
