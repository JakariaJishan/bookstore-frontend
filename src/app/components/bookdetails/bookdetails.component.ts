import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../model/book.model';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-bookdetails',
  standalone: true,
  imports: [ReviewsComponent],
  templateUrl: './bookdetails.component.html',
  styleUrl: './bookdetails.component.css'
})
export class BookdetailsComponent implements OnInit {
  bookId?:number 
  bookDetails?: BookModel 
  constructor(private route:ActivatedRoute, private bookService: BookService){}

  ngOnInit(): void {
    this.route.params.subscribe(params=> this.bookId = params["id"])
    this.showBookDetails(this.bookId)
  }

  showBookDetails(id:number|undefined){
    this.bookService.getBookDetails(id).subscribe(book => this.bookDetails = book)
  }
}
