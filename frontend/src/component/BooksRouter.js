import React from "react";
import { Link } from "react-router-dom";

const BooksRouter = () => {
  return (
    <>
      <div className="Routes">
        <Link className="link" to="/add-book">
          Add Book
        </Link>
        &emsp;&nbsp;
        <Link className="link" to="/booklist">
          Books List
        </Link>
        &emsp;
      </div>
    </>
  );
};

export default BooksRouter;
