import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

import classes from "./NavBarButtonModal.module.css";

const NavBarButtonModal = (props) => {
  const booksCount = useSelector((state) => state.books.books);
  const bookTitle = useSelector((state) => state.books.title);

  // only unique values in an array

  const bookTitlesArray = [...new Set(bookTitle)]

  // display unique values

  const uniqueChosenBooks = bookTitlesArray.map(book => <li>{book}</li>)

  const timesBookWasAdded = 0

  console.log(bookTitlesArray)


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
          {bookTitle.length}
          {/* {booksCount} */}
          {uniqueChosenBooks}
          {/* {bookTitle.map((book) => <li>{book}</li>)} */}
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
