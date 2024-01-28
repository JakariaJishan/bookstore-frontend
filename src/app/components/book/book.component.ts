import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../model/book.model';
import { BooklistComponent } from '../booklist/booklist.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BooklistComponent, ReactiveFormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  books: BookModel[] = [];
  constructor(private bookService: BookService, private router: Router) {}

  bookForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit(): void {
    this.showBooks();
  }

  showBooks() {
    this.bookService.getBooks().subscribe((data: BookModel[]) => {
      this.books = data;
    });
  }

  onSubmit() {
    let formData = {
      title: this.bookForm.value.title,
      description: this.bookForm.value.description,
      user_id: 3,
    };
    this.bookService.postBook(formData).subscribe((data) => {
      window.location.reload()
    });
  }
}
