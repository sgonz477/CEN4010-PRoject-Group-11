package com.gomez.api.rest.Repo;

import com.gomez.api.rest.Model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface BookRepo extends JpaRepository<Book, Long> {
    Book getBooksByGenre(String genre);

    List<Book> findTop10ByOrderByCopiesSoldDesc();


}
