import { createContext } from "react";

const initialState = {
  quantity: 0,
  title: "",
  price: 0,
  totalPrice: 0,
};

const BookContext = createContext(initialState);

export const BookContextProvider = (props) => {
  return (
    <BookContext.Provider value={props.quantity}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContext;
