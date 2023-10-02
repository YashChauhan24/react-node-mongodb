import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import AddBook from "./component/AddBook";
import BooksList from "./component/BooksList";
import PageNotAvailable from "./component/PageNotAvailable";
import Login from "./component/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/add-book" Component={AddBook} />
        <Route path="/edit-book/:id" Component={AddBook} />
        <Route path="/booklist" Component={BooksList} />
        <Route path="*" Component={PageNotAvailable} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
