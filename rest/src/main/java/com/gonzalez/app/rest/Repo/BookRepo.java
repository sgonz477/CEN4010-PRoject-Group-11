package com.gonzalez.app.rest.Repo;

import com.gonzalez.app.rest.Models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<Book, Long> {
}
