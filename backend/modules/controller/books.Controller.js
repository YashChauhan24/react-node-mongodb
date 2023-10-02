import books from "../model/books.Model.js";

export const create = async (req, res) => {
  const book = new books(req.body);
  try {
    await book.save();
    res.status(201).json("Data Stored succesfully!");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const getAll = async (req, res) => {
  const book = await books.find();
  res.json(book);
};

export const getOne = async (req, res) => {
  const id = req.params.id;
  const book = await books.findById(id);
  res.json(book);
};

export const replace = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await books.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
export const update = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await books.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const deleteOne = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await books.findOneAndDelete({ _id: id }, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
