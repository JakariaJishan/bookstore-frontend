import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from '../model/book.model';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = environment.bookUrl;
  private authToken = 'token'
  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(`${this.url}/books`);
  }

  getBookDetails(id: number | undefined): Observable<BookModel> {
    return this.http.get<BookModel>(`${this.url}/books/${id}`);
  }

  postBook(newBook: any) {
    let token = localStorage.getItem(this.authToken)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        `Bearer ${token}`,
    });

    return this.http.post(`${this.url}/books`, newBook, {
      headers,
    });
  }

  editBook(bookData: any) {
    let token = localStorage.getItem(this.authToken)

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        `Bearer ${token}`,
    });

    return this.http.put(`${this.url}/books/${bookData.id}`, bookData, {
      headers,
    });
  }

  deleteBook(id: number | undefined) {
    let token = localStorage.getItem(this.authToken)

    let headers = new HttpHeaders({
      Authorization:
        `Bearer ${token}`,
    });
    return this.http.delete(`${this.url}/books/${id}`, { headers });
  }
}
