import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../model/book.model';
import { ReviewsComponent } from '../reviews/reviews.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookdetails',
  standalone: true,
  imports: [ReviewsComponent, ReactiveFormsModule],
  templateUrl: './bookdetails.component.html',
  styleUrl: './bookdetails.component.css',
})
export class BookdetailsComponent implements OnInit {
  bookDetails?: BookModel;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  bookForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookForm.patchValue({
        title: params["title"],
        description: params["description"]
      })
      this.showBookDetails(params["id"]);
    });
  }

  showBookDetails(id: number | undefined) {
    this.bookService
      .getBookDetails(id)
      .subscribe((book) => (this.bookDetails = book));
  }

  editBook(id:number|undefined){
    let bookData = {
      id: id,
      title: this.bookForm.value.title,
      description: this.bookForm.value.description
      
    }
    this.bookService.editBook(bookData).subscribe(data => {
      window.location.reload()
    })
  }

  deleteBook(id: number | undefined) {
    this.bookService.deleteBook(id).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
