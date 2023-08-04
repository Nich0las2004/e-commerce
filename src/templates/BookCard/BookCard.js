import { useState, Fragment } from "react";

import classes from "./BookCard.module.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import { BsBagPlusFill } from "react-icons/bs";

const BookCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showBuyBtnClicked, setShowBuyBtnClicked] = useState(false);

  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);
  const handleCloseBuyBtn = () => setShowBuyBtnClicked(false);
  const handleShowBuyBtn = () => setShowBuyBtnClicked(true);

  return (
    <Fragment>
      {/* a book card */}

      <Col>
        <Card style={{ width: "18rem" }} className={classes.cardTemplate}>
          <Card.Img
            className={classes.bookImage}
            variant="top"
            src={props.url}
          />
          <Card.Body className={classes.cardTextAndButtons}>
            <Card.Title>{props.title}</Card.Title>
            <div className={classes.buttons}>
              <Button onClick={handleShowDetails} variant="primary">
                View Details
              </Button>
              <Button onClick={handleShowBuyBtn} className={classes.cartButton} variant="primary">
                Buy{" "}
                <Badge bg="secondary">
                  <BsBagPlusFill />
                </Badge>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* canvas */}

      <Offcanvas show={showBuyBtnClicked} onHide={handleCloseBuyBtn} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      {/* modal(info about a book) */}

      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default BookCard;
