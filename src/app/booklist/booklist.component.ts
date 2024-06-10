import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import books from '../../data/books.json';
import { Book } from '../book';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [BookComponent],
  template: `
    <section class="books-list-container">
      @for (book of books; track book.isbn) {
      <app-book [book]="book" />
      }
    </section>
  `,
  styleUrl: './booklist.component.css',
})
export class BooklistComponent {
  searchText: string = '';
  books: Book[] = books;
}
