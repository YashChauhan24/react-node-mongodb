import express from "express";
import {
  create,
  getAll,
  getOne,
  replace,
  update,
  deleteOne,
} from "../controller/books.Controller.js";

const libraryRouter = express();
//  Create
libraryRouter.post("/", create);
//Read
libraryRouter.get("/", getAll);
libraryRouter.get("/:id", getOne);
//update
libraryRouter.put("/:id", replace);
libraryRouter.patch("/:id", update);
//Delete
libraryRouter.delete("/:id", deleteOne);

export default libraryRouter;
