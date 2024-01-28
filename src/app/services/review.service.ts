import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  url = environment.bookUrl;
  constructor(private http: HttpClient) {}

  getBookReviews(id: number) {
    return this.http.get(`${this.url}/books/${id}/reviews`);
  }

  postReview(newReview: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.dRlxLjVid3MpusH2q23Hbjm91TBx6ZRlDpt7WQrtgYc',
    });

    return this.http.post(
      `${this.url}/books/${newReview.bookId}/reviews`,
      { message: newReview.message },
      {
        headers,
      }
    );
  }
  editReview(reviewData: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.dRlxLjVid3MpusH2q23Hbjm91TBx6ZRlDpt7WQrtgYc',
    });

    return this.http.put(`${this.url}/books/${reviewData.bookId}/reviews/${reviewData.id}`, {message:reviewData.message}, {
      headers,
    });
  }

  deleteReview(reviewData: any) {
    let headers = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.dRlxLjVid3MpusH2q23Hbjm91TBx6ZRlDpt7WQrtgYc',
    });
    return this.http.delete(`${this.url}/books/${reviewData.bookId}/reviews/${reviewData.id}`, { headers });
  }
}
