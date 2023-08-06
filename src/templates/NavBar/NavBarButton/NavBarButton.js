import { BsCart } from "react-icons/bs";

import classes from "./NavBarButton.module.css";

import Badge from "react-bootstrap/Badge";

const NavBarButton = () => {
  return (
    <button className={classes.button}>
      <BsCart /> <Badge className={classes.allBooks}>0</Badge>
    </button>
  );
};

export default NavBarButton;
