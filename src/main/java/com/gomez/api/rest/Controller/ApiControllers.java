package com.gomez.api.rest.Controller;

import com.gomez.api.rest.Model.Book;
import com.gomez.api.rest.Repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
public class ApiControllers {

    @Autowired
    private BookRepo bookRepo;


    //GET METHOD RETRIEVES LIST OF ALL BOOKS
    @GetMapping(value = "/books")
    public List<Book> getBooks() {
        return bookRepo.findAll();
    }



    //GET METHOD RETRIEVES LIST OF BOOKS BY GENRE
    @GetMapping(value ="/books/{genre}")
    public ResponseEntity<List<Book>> getBooksByGenre(@PathVariable String genre) {
        List<Book> books = bookRepo.findByGenre(genre);

        if (books.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(books);
        }
    }


    //GET METHOD RETRIEVES LIST OF TOP 10 BOOKS BY MOST COPIES SOLD
        @GetMapping("/books/top10")
        public List<Book> getTop10BooksByCopiesSold() {
            return bookRepo.findTop10ByOrderByCopiesSoldDesc();
        }



    //GET METHOD RETRIEVES LIST OF BOOKS FOR A PARTICULAR RATING AND HIGHER
    @GetMapping("/books/rating/{rating}")
    public ResponseEntity<List<Book>> getBooksByRating(@PathVariable int rating) {
        List<Book> books = bookRepo.findByRatingGreaterThanEqual(rating);

        if (books.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(books);
        }
    }


    //list of books by publisher
        @GetMapping("/publisher/{publisher}")
        public ResponseEntity<List<Book>> getBooksByPublisher(@PathVariable String publisher) {
            List<Book> books = bookRepo.findByPublisher(publisher);

            if (books.isEmpty()) {
                return ResponseEntity.notFound().build();
            } else {
                return ResponseEntity.ok(books);
            }
        }


    //PUT METHOD UPDATES THE PRICE OF ALL BOOKS UNDER A PUBLISHER BY A DISCOUNT PERCENT
        @PutMapping("/publisher/{publisher}/discount/{discount}")
        public ResponseEntity<Void> updatePriceByPublisher(@PathVariable String publisher, @PathVariable float discount) {
            List<Book> books = bookRepo.findByPublisher(publisher);

            if (books.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            for (Book book : books) {
                float originalPrice = book.getPrice();
                float discountedPrice = originalPrice * (1 - (discount / 100));
                book.setPrice(discountedPrice);
            }

            bookRepo.saveAll(books);

            return ResponseEntity.ok().build();
        }

    }




