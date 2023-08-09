import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";

import classes from "./NavBarButton.module.css";
import NavBarButtonModal from "./NavBarButtonModal";

import Badge from "react-bootstrap/Badge";
import { useState, Fragment } from "react";

const NavBarButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const booksCount = useSelector((state) => state.books.books);

  const cartClickHandler = () => {
    setModalShow(true);
  };

  return (
    <Fragment>
      <button onClick={cartClickHandler} className={classes.button}>
        <BsCart /> <Badge className={classes.allBooks}>{booksCount}</Badge>
      </button>
      <NavBarButtonModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default NavBarButton;
