import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../types";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() books?: Book[];
  @Output() bookEmitter: EventEmitter<Book> = new EventEmitter<Book>();
  constructor() { }

  ngOnInit(): void {
  }

  public selectBook(book: Book) {
    this.bookEmitter.emit(book)
  }

}
