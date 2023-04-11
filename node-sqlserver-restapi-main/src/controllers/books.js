import { getConnection, querys, sql } from "../database/index.js";

export const getBooks = async (req, res) => {
  try {
    const pool = await getConnection();
    const [rows, fields] = await pool.query(querys.getAllBooks);
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500);
    res.send(error.message);
  }
};

export const createNewBook = async (req, res) => {
  const {
    title,
    id,
    author,
    genre,
    avRating,
    ISBN,
    copiesSold,
    price,
    publisher,
    yearPublished,
    description,
  } = req.body;

  // validating
  if (
    title === null ||
    id === null ||
    author === null ||
    genre === null ||
    avRating === null ||
    ISBN === null ||
    copiesSold === null ||
    price === null ||
    publisher === null ||
    yearPublished === null ||
    description === null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    console.log(req.body);

    const [rows, fields] = await pool.execute(
      "INSERT INTO bookBase.bookdata (id, Title, author, genre, avRating, ISBN, copiesSold, price, publisher, yearPublished, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        title,
        author,
        genre,
        avRating,
        ISBN,
        copiesSold,
        price,
        publisher,
        yearPublished,
        description,
      ]
    );

    res.json({
      id,
      title,
      author,
      genre,
      avRating,
      ISBN,
      copiesSold,
      price,
      publisher,
      yearPublished,
      description,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getBookById = async (req, res) => {
  try {
    const pool = await getConnection();

   
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const pool = await getConnection();
    const [rows, fields] = await pool.execute(
      "DELETE FROM bookBase.bookdata WHERE Id= Id VALUES (?)",
      [id]
    );
    const result = await pool
      .input("id", req.params.id)
      .query(querys.deleteBook);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewCart = async (req, res) => {
  const { userId, bookId } = req.body;

  // validating
  if ( userId === undefined || bookId === undefined){
    userId= null; 
    bookId= null; 
  }
  try {
    const pool = await getConnection();
    console.log(req.body);
    const [rows, fields] = await pool.execute(
      "INSERT INTO bookBase.shoppingCart (userId, bookList) VALUES (?,?)",
      [userId, bookId]
    );

    res.json({ userId, bookList });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }


};

export const deleteShoppingCartItem = async (req, res) => {
  const { userId, bookId } = req.body;
  try {
    const pool = await getConnection();
    console.log(req.body);
    const [rows, fields] = await pool.execute(
      "DELETE FROM shoppingCart WHERE userID = ? AND bookList = ?",
      [userId, bookId]
    );
    if (rows.affectedRows === 1) {
      res.status(200).send("Shopping cart item deleted successfully");
    } else {
      res.status(404).send("Shopping cart item not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export const getBookListByUserID = async (req, res) => {
  const { userId } = req.body;
  try {
    const pool = await getConnection();
    console.log(req.body);
    const [rows, fields] = await pool.execute(
      "SELECT * FROM shoppingCart WHERE userID = ?",
      [userId]
    );
    res.json(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const calculateCartTotal = async (req, res) => {
  const { userId } = req.body;
  try {
    const pool = await getConnection();
    console.log(req.body);
    const [rows, fields] = await pool.execute(
      "SELECT SUM(bookData.price) AS total_price FROM shoppingCart INNER JOIN bookData ON shoppingCart.bookList = bookData.id WHERE shoppingCart.userID = ?",
      [userId]
    );
    res.json(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
