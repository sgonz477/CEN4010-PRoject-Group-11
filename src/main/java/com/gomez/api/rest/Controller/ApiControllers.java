package com.gomez.api.rest.Controller;

import com.gomez.api.rest.Model.Book;
import com.gomez.api.rest.Repo.BookRepo;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class ApiControllers {

    @Autowired
    private BookRepo bookRepo;



    //prints welcome page
    @GetMapping(value = "/")
    public String getPage() {
        return "Welcome";
    }

    //retrieves list of all the books
    @GetMapping(value = "/books")
    public List<Book> getBooks() {
        return bookRepo.findAll();
    }



    // retrieves list of top 10 books by most copies sold
        @GetMapping("/books/top10")
        public List<Book> getTop10BooksByCopiesSold() {
            return bookRepo.findTop10ByOrderByCopiesSoldDesc();
        }

        


    //retrieves list of books by genre
    @GetMapping(value = "/books/{genre}")
    public Book getBooksbyGenre(@PathVariable("genre") String genre) {
        return bookRepo.getBooksByGenre(genre);
    }



/*
    //saves a new book to data
    @PostMapping(value = "/save")
    public String saveBook(@RequestBody Book book) {
        bookRepo.save(book);
        return "Saved...";
    }

 */


    //updates books
    @PutMapping(value = "update/{publisher}")
    public String updateBook(@PathVariable long id, @RequestBody Book book) {
        Book updatedBook = bookRepo.findById(id).get();
        updatedBook.setTitle(book.getTitle());
        updatedBook.setAuthorName(book.getAuthorName());
        updatedBook.setGenre(book.getGenre());
        updatedBook.setRating(book.getRating());
        updatedBook.setCopiesSold(book.getCopiesSold());
        updatedBook.setPrice(book.getPrice());
        updatedBook.setPublisher(book.getPublisher());
        return "Updated...";
    }



        
    }


