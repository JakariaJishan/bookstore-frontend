import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../model/book.model';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-mybooks',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './mybooks.component.html',
  styleUrl: './mybooks.component.css',
})
export class MybooksComponent implements OnInit {
  userBooks: BookModel[] = [];
  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.userBooks().subscribe((res) => {
      console.log(res)
      this.userBooks = res;
    });
  }
}
