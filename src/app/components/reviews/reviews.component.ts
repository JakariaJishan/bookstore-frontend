import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit{
  reviews?: any

  constructor(private route:ActivatedRoute,private bookService: BookService){}

  ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.bookService.getBookReviews(params["id"]).subscribe(reviews => this.reviews = reviews)
  })
}
}
