import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  url = environment.bookUrl;
  private authToken = 'token'

  constructor(private http: HttpClient) {}

  getBookReviews(id: number) {
    return this.http.get(`${this.url}/books/${id}/reviews`);
  }

  postReview(newReview: any) {
    let token = localStorage.getItem(this.authToken)

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        `Bearer ${token}`,
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
    let token = localStorage.getItem(this.authToken)

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        `Bearer ${token}`,
    });

    return this.http.put(`${this.url}/books/${reviewData.bookId}/reviews/${reviewData.id}`, {message:reviewData.message}, {
      headers,
    });
  }

  deleteReview(reviewData: any) {
    let token = localStorage.getItem(this.authToken)

    let headers = new HttpHeaders({
      Authorization:
        `Bearer ${token}`,
    });
    return this.http.delete(`${this.url}/books/${reviewData.bookId}/reviews/${reviewData.id}`, { headers });
  }
}
