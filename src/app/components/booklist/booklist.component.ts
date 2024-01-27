import { Component, Input } from '@angular/core';
import { BookModel } from '../../model/book.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [BooklistComponent, RouterLink],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  @Input() book!: BookModel

}
