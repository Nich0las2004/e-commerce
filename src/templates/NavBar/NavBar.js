import { NavLink, Outlet } from "react-router-dom";

import classes from "./NavBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <>
      <Navbar className={classes.navBarBody} bg="dark" data-bs-theme="dark">
        <Container className={classes.navBarContainer}>
          <Navbar.Brand>
            <NavLink to="/home">Books</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/home/fantasy">
              <li>Fantasy</li>
            </NavLink>
            <NavLink to="/home/adventure">
              <li>Adventure</li>
            </NavLink>
            <NavLink to="/home/classics">
              <li>Classics</li>
            </NavLink>
            <NavLink to="/home/science-fiction">
              <li>Science Fiction</li>
            </NavLink>
          </Nav>
          <button>Log In</button>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;
