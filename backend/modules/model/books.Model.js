import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: { type: String, unique: true },
  author: { type: String },
  category: { type: String },
  price: { type: Number },
  rating: { type: Number, min: [0], max: [5] },
});
const books = mongoose.model("books", bookSchema, "books");

export default books;
