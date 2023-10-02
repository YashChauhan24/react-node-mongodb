import React, { useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import BooksRouter from "./BooksRouter";

const BooksList = () => {
  const [books, setBooks] = React.useState([]);

  const getBooks = async () => {
    const res = await axios.get("http://localhost:8081/library/");
    setBooks(res.data);
  };

  const handleClick = async (_id) => {
    const res = await axios.delete(`http://localhost:8081/library/${_id}`);
    if (res.data._id) {
      getBooks();
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="list-div">
        <BooksRouter />
        <br />
        {books.map((book, id) => (
          <Book {...book} key={id} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default BooksList;
