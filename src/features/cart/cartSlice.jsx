import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     price: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((c) => c.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      //delete when quantity === 0 by calling the reducer deleteItem
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCartItem(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;

//selectors
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, cur) => sum + cur.totalPrice, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;


