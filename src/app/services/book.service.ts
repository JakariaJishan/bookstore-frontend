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
  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(`${this.url}/books`);
  }

  getBookDetails(id: number | undefined): Observable<BookModel> {
    return this.http.get<BookModel>(`${this.url}/books/${id}`);
  }

  getBookReviews(id: number) {
    return this.http.get(`${this.url}/books/${id}/reviews`);
  }

  postBook(newBook: any) {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.dRlxLjVid3MpusH2q23Hbjm91TBx6ZRlDpt7WQrtgYc',
    });

    return this.http.post(`${this.url}/books`, newBook, {
      headers,
    });
  }

  editBook(bookData:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.dRlxLjVid3MpusH2q23Hbjm91TBx6ZRlDpt7WQrtgYc',
    });

    return this.http.put(`${this.url}/books/${bookData.id}`, bookData, {
      headers,
    });
  }

  deleteBook(id:number |undefined){
    let headers = new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.dRlxLjVid3MpusH2q23Hbjm91TBx6ZRlDpt7WQrtgYc'
    })
    return this.http.delete(`${this.url}/books/${id}`, {headers})
  }
}
