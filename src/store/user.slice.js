import { createSlice } from "@reduxjs/toolkit";

const userSLice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },

  reducers: {
    addUserInfo(state, action) {
      const newUser = action.payload;
      // const existingUser = state.users.find((user) => user.id === newUser.id);

      state.users.push({
        id: newUser.id,
        name: newUser.name,
        address: newUser.address,
        creditCard: newUser.creditCard,
      });
    },
    replaceUsers(state, action) {
      state.users = action.payload.users;
    },
  },
});

export const userActions = userSLice.actions;
export default userSLice;
