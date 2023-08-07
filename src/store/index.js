import { configureStore, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  books: 0,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    increment(state) {
      state.books++;
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
