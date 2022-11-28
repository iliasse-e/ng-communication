import { Component, OnInit } from '@angular/core';
import {Book} from "./types";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  protected books: Book[] = new Array<Book>()
  protected selectedBook!: Book;

  constructor() { }

  ngOnInit(): void {
    this.addBook({title: "Kitab al-furusiyya wa-al-baytara", author: "Ibn Ahi Hizam"});
    this.addBook({title: "Mongols and Mamluks. The Mamluk-&lkh$nid War", author: "Amitai Preiss"});
    this.addBook({title: "Al mawa'id wa al-i'tibar fi dhikr  al khotot wa athar", author: "Al Maqrizi"});
    this.addBook({title: "Kitab al-i'tibar", author: "Ibn Munqid, Usama"});
    console.log(this.getBooks());
  }

  public addBook(book: Book) {
    this.books.push(book);
  }

  public selectBook(book: Book) {
    this.selectedBook = book;
  }
  public getBooks(): Book[] {
    return this.books;
  }

  public getSelectedBook(): Book {
    return this.selectedBook;
  }

  updateSelectedBook($event: Book) {
    this.selectedBook = $event;
  }
}
