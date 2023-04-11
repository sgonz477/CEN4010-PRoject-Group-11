export const querys = {
  getAllBooks: "SELECT  * FROM bookdata",
  getBookById: "SELECT * FROM bookdata Where `Id` = ?, [id]",
  addNewBook:
    "INSERT INTO [bookBase].[dbo].[bookdata]  (`id` = ?, `title`=?, `author`=?, `genre`=?, `avRating`=? , `ISBN`=?, `copiesSold`=?, `price`=?, `publisher`=?, `yearPublised`=?, `description`=?), [id title, author, genre, avRating , ISBN, copiesSold, price, publisher, yearPublised, description];",
  deleteBook: "DELETE FROM [bookBase].[dbo].[bookdata] WHERE Id= @Id",
  getTotalBooks: "SELECT COUNT(*) FROM bookBase.dbo.bookdata",
  getBookListByUserID: "SELECT * FROM shoppingCart Where `Id` = ?, [id]",
  postNewCart:
    "INSERT INTO [shoppingCart].[dbo].[bookdata] (`userId` = ?, `bookIdList`=?),[userId, bookIdList]",
  deleteShoppingCartItem:
    "UPDATE shoppingCart SET bookIdList = JSON_REMOVE((bookIdList, '$[?]') WHERE `userId` = ?), [bookListIndex, userId]",
};
