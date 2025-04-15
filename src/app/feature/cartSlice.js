// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
//   totalAmount: 0,
//   totalPrice: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, { payload }) => {
//       state.cart.push(payload);
//     },
//     incrementAmount: (state, { payload }) => {
//       const item = state.cart.find((i) => i.id == payload);
//       item.amount += 1;
//     },
//     decrementAmount: (state, { payload }) => {
//       const item = state.cart.find((i) => i.id == payload);
//       item.amount -= 1;
//     },
//     clearCart: () => {},
//     deleteCart: () => {},
//   },
// });

// export const {
//   addToCart,
//   clearCart,
//   deleteCart,
//   incrementAmount,
//   decrementAmount,
// } = cartSlice;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.cart.find((i) => i.id === payload.id);
      if (!item) {
        state.cart.push(payload);
      }
    },
    incrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id === payload);
      if (item) {
        item.amount += 1;
      }
    },
    decrementAmount: (state, { payload }) => {
      const item = state.cart.find((i) => i.id === payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
      }
    },
    deleteCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  clearCart,
  deleteCart,
  incrementAmount,
  decrementAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
