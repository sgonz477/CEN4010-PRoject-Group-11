import { getBooks, addBook, getBook, updateBook, deleteBook } from '../controllers/books'

module.exports = app => {
  app.route('/books')
    .get(getBooks)
    .post(addBook)

  app.route('/books/:id')
    .get(getBook)
    .put(updateBook)
    .delete(deleteBook)
}