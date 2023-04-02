export const querys = {
  getAllBooks: "SELECT TOP(500) * FROM [book_data].[dbo].[bookBase]",
  getBookById: "SELECT * FROM bookBase Where Id = @Id",
  addNewBook:
    "INSERT INTO [book_data].[dbo].[bookBase] (id, title, author, genre, avRating , ISBN, copiesSold, price, publisher, yearPublised, description) VALUES (@id, @title, @author, @genre, @avRating , @ISBN, @copiesSold, @price, @publisher, @yearPublised, @description);",
  deleteBook: "DELETE FROM [book_data].[dbo].[bookBase] WHERE Id= @Id",
  getTotalBooks: "SELECT COUNT(*) FROM book_data.dbo.bookBase",
  updateBookById:
    "UPDATE [book_data].[dbo].[bookBase] SET id = @id, title = @title, author = @author, genre = @genre, avRating= @avRating, ISBN= @ISBN, copiesSold= @copiesSold, price= @price, publisher= @publisher, description= @description    WHERE Id = @id",
};
