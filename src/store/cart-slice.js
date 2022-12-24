import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    totalCharge: 0,
    pay: false,
  },
  reducers: {
    makePayment(state) {
      state.pay = !state.pay;
    },
    calcTotal(state) {
      state.totalCharge = state.items.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
    },
    resetAl(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.changed = true;
    },

    resetCart(state, action) {
      const itemdId = action.payload;

      state.items = state.items.filter((item) => item.id !== itemdId);

      state.totalQuantity = state.items.reduce((acc, i) => {
        acc += i.quantity;
        return acc;
      }, 0);
      state.changed = true;
    },

    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
