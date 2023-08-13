import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

import classes from "./NavBarButtonModal.module.css";
import { buttonActions } from "../../../store";
import { useEffect } from "react";

const NavBarButtonModal = (props) => {
  const dispatch = useDispatch();

  const bookDetails = useSelector((state) => state.books.bookDetails);

  const totalPrice = useSelector((state) => state.books.totalPrice);

  const booksCount = useSelector((state) => state.books.books);

  const incrementBookQuantityHandler = () => {
    dispatch(buttonActions.increment());
  };
  const decrementBookQuantityHandler = () => {
    dispatch(buttonActions.decrement());
  };

  // new code

  

  // end new code

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
        {booksCount >= 0 && booksCount}
        
        <p>Total Price: ${totalPrice}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button className={classes.orderBtn}>Order</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NavBarButtonModal;
