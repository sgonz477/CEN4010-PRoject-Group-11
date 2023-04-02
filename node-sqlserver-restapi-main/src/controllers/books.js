import { getConnection, querys, sql } from "../database";

export const getBooks = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllBooks);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewBook = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  // validating
  if (description == null || name == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("id", sql.Char, name)
      .input("title", sql.Char, title)
      .input("author", sql.Char, author)
      .input("genre", sql.Char, avRating)
      .input("avRating", sql.double, avRating)
      .input("ISBN", sql.Char(14), ISBN)
      .input("copiesSold", sql.Int, copiesSold)
      .input("price", sql.double, price)
      .input("publisher", sql.Char, publisher)
      .input("yearPublised", sql.Int, yearPublised)
      .input("description", sql.Text, description)
      .query(querys.addNewBook);

    res.json({ id, title, author, genre, avRating , ISBN, copiesSold, price, publisher, yearPublised, description  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getBookById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getBookById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteBook);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalBooks = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalBooks);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateBookById = async (req, res) => {
  const { id, title, author, genre, avRating , ISBN, copiesSold, price, publisher, yearPublised, description  } = req.body;

  // validating
  if (description == null || name == null || quantity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id", sql.Char, id)
      .input("title", sql.Char, title)
      .input("author", sql.Char, author)
      .input("genre", sql.Char, avRating)
      .input("avRating", sql.double, avRating)
      .input("ISBN", sql.Char(14), ISBN)
      .input("copiesSold", sql.Int, copiesSold)
      .input("price", sql.double, price)
      .input("publisher", sql.Char, publisher)
      .input("yearPublised", sql.Int, yearPublised)
      .input("description", sql.Text, description)
      .query(querys.updateBookById);
      res.json({ id, title, author, genre, avRating , ISBN, copiesSold, price, publisher, yearPublised, description  });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
