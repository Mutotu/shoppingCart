import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisivble: false },
  reducers: {
    toggle(state) {
      state.cartIsVisivble = !state.cartIsVisivble;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
