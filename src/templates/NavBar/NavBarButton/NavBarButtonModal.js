import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

import classes from "./NavBarButtonModal.module.css";
import { buttonActions } from "../../../store";
import { useState, useEffect } from "react";

const NavBarButtonModal = (props) => {
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  const bookTitleAndPrice = useSelector(
    (state) => state.books.bookTitleAndPrice
  );

  useEffect(() => {
    let sum = 0;

    bookTitleAndPrice.forEach((obj) => {
      sum += obj.price;
    });

    setTotalPrice(sum);
  }, [bookTitleAndPrice]);

  const booksCount = useSelector((state) => state.books.books);

  const incrementBookQuantityHandler = () => {
    dispatch(buttonActions.increment());
  };
  const decrementBookQuantityHandler = () => {
    dispatch(buttonActions.decrement());
  };

  const uniqueBookTitleArray = [...new Set(bookTitleAndPrice.map(obj => obj.title))]

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
          {bookTitleAndPrice.map((obj) => {
            return (
              <li key={obj.id}>
                {obj.title} {`$${obj.price}`}
              </li>
            );
          })}
          {`Total Price: $${parseFloat(totalPrice).toFixed(2)}`}
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
