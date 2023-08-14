import { configureStore, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  books: 0,
  totalPrice: 0,
  bookDetails: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    increment(state) {
      state.books++;
    },
    decrement(state) {
      if (state.books > 0) {
        state.books--;
      }
    },
    addBookDetails(state, action) {
      state.bookDetails.push(action.payload);
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
