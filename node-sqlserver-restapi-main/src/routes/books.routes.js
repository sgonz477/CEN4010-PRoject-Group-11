import { Router } from "express";
import {
  getBooks,
  createNewBook,
  calculateCartTotal,
  deleteBookById,
  getBookListByUserID,
  createNewCart,
  deleteShoppingCartItem
} from "../controllers/books.js";

const router = Router();

router.delete("/shoppingCart", deleteShoppingCartItem);

router.post("/shoppingCart", createNewCart);

router.get("/shoppingCart", getBookListByUserID);

router.get("/calculateCartTotal", calculateCartTotal);

router.get("/books", getBooks);

router.post("/books",   createNewBook);

router.delete("/books/:id", deleteBookById);



export default router;
