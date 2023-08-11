import { configureStore, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  books: 0,
  bookTitleAndPrice: []
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
    addBookTitleAndPrice(state,action){
      state.bookTitleAndPrice.push(action.payload)
    }
  },
});

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export const buttonActions = booksSlice.actions;

export default store;
