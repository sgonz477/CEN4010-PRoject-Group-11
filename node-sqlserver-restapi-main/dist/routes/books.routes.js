"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _books = require("../controllers/books");

var router = (0, _express.Router)();
router.get("/books", _books.getBooks);
router.post("/books", _books.createNewBook);
router.get("/books/count", _books.getBookById);
router.get("/books/:id", _books.deleteBookById);
router["delete"]("/books/:id", _books.getTotalBooks);
router.put("/books/:id", _books.updateBookById);
var _default = router;
exports["default"] = _default;