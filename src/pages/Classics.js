import BookCard from "../templates/BookCard/BookCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BooksAPI from "../templates/BooksAPI/BooksAPI";

const Classics = () => {
  return (
    <Container>
      <Row>
        {BooksAPI.filter((obj) => obj.genre === "classics").map((book) => (
          <BookCard
            key={book.id}
            url={book.url}
            title={book.title}
            text={book.text}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Classics;
