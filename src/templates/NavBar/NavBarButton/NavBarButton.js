import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";

import classes from "./NavBarButton.module.css";

import Badge from "react-bootstrap/Badge";

const NavBarButton = () => {
  const booksCount = useSelector((state) => state.books.books)


  return (
    <button className={classes.button}>
      <BsCart /> <Badge className={classes.allBooks}>{booksCount}</Badge>
    </button>
  );
};

export default NavBarButton;
