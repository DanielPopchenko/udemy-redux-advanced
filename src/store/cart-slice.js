import { createSlice } from '@reduxjs/toolkit';

// ! we should keep our async code off the reducers
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      console.log('newItem: ', newItem);
      //   ! find an element
      const existingItem = state.items.find((el) => el.id === newItem.id);

      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    // ! ---- cart total quantity ----

    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((el) => el.id === itemId);

      state.changed = true;
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        //   ! we keep all items where id do not match this itemId
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },

    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export const { addItem, removeItem, replaceCart } = cartSlice.actions;
export default cartSlice;
