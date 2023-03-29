package com.gomez.api.rest.Model;

import jakarta.persistence.*;

import java.util.Objects;


@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String title;

    @Column
    private String authorName;

    @Column
    private String genre;

    @Column
    private int rating;

    @Column
    private long copiesSold;

    @Column
    private float price;

    @Column
    private String publisher;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public long getCopiesSold() {
        return copiesSold;
    }

    public void setCopiesSold(long copiesSold) {
        this.copiesSold = copiesSold;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }








    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", authorName='" + authorName + '\'' +
                ", genre='" + genre + '\'' +
                ", rating=" + rating +
                ", copiesSold=" + copiesSold +
                ", price=" + price +
                ", publisher='" + publisher + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return id == book.id && rating == book.rating && copiesSold == book.copiesSold && Float.compare(book.price, price) == 0 && title.equals(book.title) && authorName.equals(book.authorName) && genre.equals(book.genre) && publisher.equals(book.publisher);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, authorName, genre, rating, copiesSold, price, publisher);
    }


}
