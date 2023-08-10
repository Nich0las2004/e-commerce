import { configureStore, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  books: 0,
  title: [],
  quantity: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    increment(state) {
      state.books++;
    },
    decrement(state) {
      state.books--;
    },
    bookTitle(state, action) {
      state.title.push(action.payload);
    },
    bookQuantity(state, action) {
      state.quantity.push();
    },
  },
});

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export const buttonActions = booksSlice.actions;

export default store;
