import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  template: ` <main class="book-list">
    <div class="book-card">
      <img
        [src]="book?.cover"
        alt="{{ book?.title }} cover"
        class="book-cover"
      />
      <div class="book-details">
        <h2>{{ book?.title }}</h2>
        <p><strong>Autor(es):</strong> {{ book?.authors?.join(', ') }}</p>
        <p><strong>Género(s):</strong> {{ book?.genres?.join(', ') }}</p>
        <p><strong>Editorial:</strong> {{ book?.publisher }}</p>
        <p><strong>Año:</strong> {{ book?.year }}</p>
        <p><strong>Páginas:</strong> {{ book?.pageCount }}</p>
        <p><strong>Idioma:</strong> {{ book?.language }}</p>
        <p>{{ book?.summary }}</p>
      </div>
    </div>
  </main>`,
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book | undefined;
}
