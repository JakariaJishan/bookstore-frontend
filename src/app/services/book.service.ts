import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from '../model/book.model';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url  = environment.bookUrl
  constructor(private http:HttpClient) { }

  getBooks():Observable<BookModel[]>{
    return this.http.get<BookModel[]>(`${this.url}/books`)
  }

  getBookDetails(id:number | undefined):Observable<BookModel>{
    return this.http.get<BookModel>(`${this.url}/books/${id}`)
  }

  getBookReviews(id:number){
    return this.http.get(`${this.url}/books/${id}/reviews`)
  }
}
