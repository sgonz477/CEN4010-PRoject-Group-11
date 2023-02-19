import { Router } from "express";
import {
  getBooks,
  createNewBook,
  getBookById,
  deleteBookById,
  getTotalBooks,
  updateBookById,
} from "../controllers/books";

const router = Router();

router.get("/books", getBooks);

router.post("/books",   createNewBook);

router.get("/books/count", getBookById);

router.get("/books/:id", deleteBookById);

router.delete("/books/:id", getTotalBooks);

router.put("/books/:id", updateBookById);

export default router;
