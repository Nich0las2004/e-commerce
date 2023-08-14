import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";

import classes from "./NavBarButtonModal.module.css";
import { buttonActions } from "../../../store";

const NavBarButtonModal = (props) => {
  const dispatch = useDispatch();

  const bookDetails = useSelector((state) => state.books.bookDetails);

  // const uniqueBooks = [...new Set(bookDetails)]

  const incrementBookQuantityHandler = (book) => {
    const updatedRepeat = book.repeat + 1;
    dispatch(buttonActions.increment());
    dispatch(
      buttonActions.updateRepeat({ title: book.title, repeat: updatedRepeat })
    );
  };
  const decrementBookQuantityHandler = (book) => {
    const updatedRepeat = book.repeat - 1;
    dispatch(buttonActions.decrement());
    dispatch(
      buttonActions.updateRepeat({ title: book.title, repeat: updatedRepeat })
    );
  };

  const removeBookHandler = (book) => {
    dispatch(buttonActions.updateRepeat({ title: book.title, repeat: 0 }));
    dispatch(buttonActions.removeBook(book.repeat));
  };

  const uniqueBookDetails = bookDetails.filter(
    (book, index, self) =>
      index === self.findIndex((b) => b.title === book.title)
  );

  const chosenBooks = uniqueBookDetails.map((obj) => {
    const fullPrice = (obj.price * obj.repeat).toFixed(2);

    return (
      <tr key={Math.random()}>
        {obj.repeat > 0 && (
          <Fragment>
            <td> {obj.title}</td>
            <td
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                top: 0,
              }}
            >
              <button
                className={classes.buttons}
                type="button"
                onClick={() => decrementBookQuantityHandler(obj)}
              >
                &minus;
              </button>
              {obj.repeat}

              <button
                className={classes.buttons}
                type="button"
                onClick={() => incrementBookQuantityHandler(obj)}
              >
                &#43;
              </button>
            </td>
            <td> {fullPrice}</td>

            <td>
              {/* <button onClick={() => removeBookHandler(obj)}>remove</button> */}
              <Button onClick={() => removeBookHandler(obj)} variant="danger">
                Remove
              </Button>{" "}
            </td>
          </Fragment>
        )}
      </tr>
    );
  });

  const totalSelectedPrice = bookDetails.reduce(
    (total, book) => total + book.price * book.repeat,
    0
  );
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{chosenBooks}</tbody>
        </Table>

        <p>Total Price: ${totalSelectedPrice.toFixed(2)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button className={classes.orderBtn}>Order</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NavBarButtonModal;
