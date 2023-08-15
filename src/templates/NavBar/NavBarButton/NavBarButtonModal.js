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
      <tr key={Math.random()} style={{}}>
        {obj.repeat > 0 && (
          <Fragment>
            <td>{obj.title}</td>
            <td
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
            <td>${fullPrice}</td>

            <td>
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

  const orderHandler = () => {
    fetch(
      "https://react-http-21b19-default-rtdb.europe-west1.firebasedatabase.app/prices.json",
      {
        method: "POST",
        body: JSON.stringify({ price: `$${totalSelectedPrice.toFixed(2)}` }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(() => alert("stored"))
      .catch((error) => alert(error));
  };

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
              <th
                style={{
                  textAlign: "center",
                }}
              >
                Quantity
              </th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{chosenBooks}</tbody>
        </Table>

        <h4>Total Price: ${totalSelectedPrice.toFixed(2)}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          variant="warning"
          className={classes.orderBtn}
          onClick={orderHandler}
        >
          Order
        </Button>{" "}
      </Modal.Footer>
    </Modal>
  );
};

export default NavBarButtonModal;
