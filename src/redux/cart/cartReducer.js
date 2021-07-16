/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartNumber: 0,
  cards: [],
  counter: [],
  amount: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.cards.some((item) => item.id === action.payload.id)) {
        state.cards.push(action.payload);
        state.cartNumber += 1;
      } else {
        state.cards.splice(
          state.cards
            .map((e) => {
              return e.id;
            })
            .indexOf(action.payload.id),
          1
        );
        state.cartNumber -= 1;
      }
    },
    addCount: (state, action) => {
      state.counter.push(action.payload);
      state.amount += 1;
    },
    degCount: (state, action) => {
      state.amount -= 1;
    },
  },
});

export const { actions, reducer } = cartSlice;

export const { addToCart, addCount, degCount } = cartSlice.actions;

export const selectCartNumber = (state) => state.cart.cartNumber;

export default cartSlice.reducer;
