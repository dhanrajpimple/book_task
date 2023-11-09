const Book = require("../models/Book")
const mongoose = require("mongoose");
exports.createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      summary
    } = req.body;
    if (!title || !author || !summary) {
      return res.status(400).json({
        success: false,
        message: "All field are required",
      });
    }
    const BookDetails = await Book.create({
      title: title,
      author: author,
      summary: summary
    });
    console.log(BookDetails);
    return res.status(200).json({
      success: true,
      message: " book creatve  Successfully",
      BookDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error while creating book",
      error,
    });
  }
};

exports.singleBook = async (req, res) => {
  try {

    const { id } = req.body;
    const book = await Book.find({ id });
    if (!book) {
      return res.status(404).json({
        error: 'book not found'
      });
    }
    res.status(200).json({
      success: true,
      book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error while single getting book",
      error,
    });
  }
};

exports.updateBook = async (req, res) => {

  const { id } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({
        error: 'book not found'
      });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error while update a book",
      error,
    });
  }
};

exports.getAllBook = async (req, res) => {
  try {
    const book = await Book.find({});
    if (!book) {
      return res.status(200).send({
        success: false,
        message: "no book found",
      });
    }
    return res.status(200).send({
      success: true,
      bookCount: book.length,
      message: "all bool lists",
      book,
    });

  }
  catch (error) {

    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error while getting book",
      error,
    });
  }
};



exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({
        error: 'Book not found'
      });
    }

    return res.status(200).send({
      success: true,
      message: "book deleted"
    })

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error while getting book",
      error,
    });
  }
};