package com.gomez.api.rest.Repo;
import com.gomez.api.rest.Model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface BookRepo extends JpaRepository<Book, Long> {

    List<Book> findTop10ByOrderByCopiesSoldDesc();

    List<Book> findByRatingGreaterThanEqual(int rating);

    List<Book> findByGenre(String genre);

    List<Book> findByPublisher(String publisher);
}
