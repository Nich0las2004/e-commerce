import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

import classes from "./NavBarButtonModal.module.css";
import { buttonActions } from "../../../store";

const NavBarButtonModal = (props) => {
  const dispatch = useDispatch();

  const booksCount = useSelector((state) => state.books.books);
  const bookTitle = useSelector((state) => state.books.title);
  // const bookQuantity = useSelector(state => state.books.quantity)

  const incrementBookQuantityHandler = () => {
    dispatch(buttonActions.increment());
  };

  const decrementBookQuantityHandler = () => {
    dispatch(buttonActions.decrement());
  };

  // only unique values in an array

  const bookTitlesArray = [...new Set(bookTitle)];

  // display unique values

  const uniqueChosenBooks = bookTitlesArray.map((book) => (
    <li>
      {book} <span>{0}</span>{" "}
      <button onClick={incrementBookQuantityHandler}>+</button>{" "}
      <button onClick={decrementBookQuantityHandler}>-</button>
    </li>
  ));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Selected Books
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {booksCount >= 0 && booksCount}
          {uniqueChosenBooks}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button className={classes.orderBtn}>Order</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NavBarButtonModal;
