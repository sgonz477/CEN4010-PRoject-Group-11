package com.gonzalez.app.rest.Controller;

import com.gonzalez.app.rest.Models.Author;
import com.gonzalez.app.rest.Models.Book;
import com.gonzalez.app.rest.Repo.AuthorRepo;
import com.gonzalez.app.rest.Repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ApiController {

    @Autowired
    private BookRepo bookRepo;
    @Autowired
    private AuthorRepo authorRepo;


    @GetMapping(value = "/")
    public String getBook(){
        return "Welcome to our bookstore!";
    }

    @GetMapping(value = "/books")
    public List<Book> getBooks(){
        return bookRepo.findAll();
    }

    @GetMapping(value = "/book/id/{bookId}")
    public Book getBookById(@PathVariable long bookId){
        Book bookById = bookRepo.findById(bookId).get();
        return bookById;
    }

    @PostMapping(value = "/book/create")
    public String saveBook(@RequestBody Book book){
        bookRepo.save(book);
        return "Book is saved.";
    }
    @DeleteMapping(value = "/book/delete/{bookId}")
    public String deleteBook(@PathVariable long bookId){
        Book deleteBook = bookRepo.findById(bookId).get();
        bookRepo.delete(deleteBook);
        return "Book with id: " + bookId + " has been deleted.";
    }
    @PutMapping(value = "/book/update/{bookId}")
    public String updateBook(@PathVariable long bookId, @RequestBody Book book){
        Book updatedBook = bookRepo.findById(bookId).get();
        updatedBook.setBookId(book.getBookId());
        updatedBook.setIsbn(book.getIsbn());
        updatedBook.setBookName(book.getBookName());
        updatedBook.setAuthorName(book.getAuthorName());
        updatedBook.setGenre(book.getGenre());
        updatedBook.setCopiesSold(book.getCopiesSold());
        updatedBook.setPrice(book.getPrice());
        updatedBook.setPublisher(book.getPublisher());
        updatedBook.setYearPublished(book.getYearPublished());
        updatedBook.setBookDescription(book.getBookDescription());
        return "Book has been updated.";
    }

    @PostMapping(value = "/author/create")
    public String createAuthor(@RequestBody Author author) {
        authorRepo.save(author);
        return "Author has been created";
    }

    @GetMapping(value = "/authors")
    public List<Author> getAuthors(){
        return authorRepo.findAll();
    }

    @DeleteMapping(value = "/author/delete/{authorId}")
    public String deleteAuthor(@PathVariable long authorId){
        Author deleteAuthor = authorRepo.findById(authorId).get();
        authorRepo.delete(deleteAuthor);
        return "Author with id: " + authorId + " has been deleted.";
    }

    /*@GetMapping(value = "/book/author/{authorId}")
    public List<Book> getBookByAuthor(@RequestBody Author author, @RequestBody Book book){
        List <Book> allBooks = new ArrayList<>();
        allBooks = bookRepo.findAll();
        List<Book> matchingAuthor = new ArrayList<>();

        for (int i =0; i < allBooks.size() ; i++){
            if (author.getFirstName()&&author.getLastName() = book.getAuthorName())
        }*/

}
