import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

import classes from './NavBarButtonModal.module.css'

const NavBarButtonModal = (props) => {
    const booksCount = useSelector((state) => state.books.books)


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {booksCount}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>Order</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NavBarButtonModal;
