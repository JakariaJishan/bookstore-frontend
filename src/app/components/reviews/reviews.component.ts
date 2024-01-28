import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent implements OnInit {
  reviews?: any;
  bookId?: number;

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) {}

  reviewForm = new FormGroup({
    message: new FormControl(''),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
      this.reviewForm.patchValue({
        message: params["message"]
      })
      this.reviewService
        .getBookReviews(params['id'])
        .subscribe((reviews) => (this.reviews = reviews));
    });
  }

  addReview() {
    let newReview = {
      bookId: this.bookId,
      message: this.reviewForm.value.message
    }
    this.reviewService.postReview(newReview).subscribe(data => {
      window.location.reload()
    })
  }

  editReview(id:number){
    let reviewData = {
      bookId:this.bookId,
      id:id,
      message: this.reviewForm.value.message
    }
    this.reviewService.editReview(reviewData).subscribe(data => {
      window.location.reload()
    })
  }

  deleteReview(id: number | undefined) {
    let reviewData = {
      bookId: this.bookId,
      id: id
    }
    this.reviewService.deleteReview(reviewData).subscribe((data) => {
      window.location.reload()
    });
  }
}
