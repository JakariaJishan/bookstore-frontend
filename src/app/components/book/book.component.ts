import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../model/book.model';
import { BooklistComponent } from '../booklist/booklist.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BooklistComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit{
  books: BookModel[] = []
  constructor(private bookService: BookService) {
  }
  
  
  ngOnInit(): void {
    this.showBooks()
  }

  showBooks() {
    this.bookService.getBooks().subscribe((data: BookModel[]) => {
     this.books = data
    });
  }
}
