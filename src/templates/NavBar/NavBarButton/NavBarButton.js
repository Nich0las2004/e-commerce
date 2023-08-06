import { BsCart } from "react-icons/bs";

import classes from "./NavBarButton.module.css";

const NavBarButton = () => {
  return (
    <button className={classes.button}>
      <BsCart /> <span>0</span>
    </button>
  );
};

export default NavBarButton;
