import { createSlice } from "@reduxjs/toolkit";

const userSLice = createSlice({
  name: "user",
  initialState: { name: "", address: "", creditCard: "" },
  reducers: {
    //add user { name: "", address: "", creditCard: "" }
    //with unique id
    //andd try to implement the backend for it
  },
});

export const userActions = userSLice.actions;
export default userSLice;
