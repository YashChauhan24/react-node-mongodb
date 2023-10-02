import axios from "axios";
import React, { useEffect } from "react";
import BooksRouter from "./BooksRouter";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const initialBookState = {
    title: "",
    author: "",
    category: "Select",
    price: "",
    rating: "",
  };

  const [book, setBook] = React.useState(initialBookState);
  const categoryList = [
    "Novel",
    "Horror",
    "Mystery",
    "Biography",
    "Fantasy",
    "Fiction",
  ];

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const { id } = useParams();
  const { pathname } = useLocation();
  let addEditMode = "add";
  if (pathname.includes("/edit-book")) {
    addEditMode = "edit";
  }

  const handleCheckFunction = async () => {
    try {
      if (addEditMode === "edit") {
        try {
          const res = await axios.get(`http://localhost:8081/library/${id}`);
          setBook(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleCheckFunction();
  }, []);

  const myFormSubmit = async (e) => {
    if (addEditMode === "edit") {
      const res = await axios.put(`http://localhost:8081/library/${id}`, book);
      if (res.data) {
        navigate("/booklist");
      }
    } else {
      const res = await axios.post("http://localhost:8081/library/", book);
      if (res.data) {
        navigate("/booklist");
      }
    }
  };

  return (
    <>
      <div className="main-form">
        <BooksRouter />
        <br />
        <h3>{addEditMode === "edit" ? "Edit Book" : "Add Book"}</h3>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter book Title"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Author name"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            name="category"
            value={book.category}
            onChange={handleChange}
          >
            <option className="form-control" value="Select">
              Select
            </option>
            {categoryList.map((category, index) => (
              <option className="form-control" key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <br />
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter book price"
            name="price"
            value={book.price}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter book rating"
            name="rating"
            value={book.rating}
            onChange={handleChange}
          />
        </div>
        <br />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => myFormSubmit()}
        >
          {addEditMode === "edit" ? "Update" : "Add"}
        </button>
      </div>
    </>
  );
};

export default AddBook;
