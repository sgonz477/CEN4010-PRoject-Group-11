package com.gonzalez.app.rest.Repo;

import com.gonzalez.app.rest.Models.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepo extends JpaRepository<Author, Long> {
}