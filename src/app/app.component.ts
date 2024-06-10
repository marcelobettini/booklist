import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist/booklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    BooklistComponent,
  ],
  template: `<header>
      <h1 routerLink="/">Mis Libros</h1>
      <nav>
        <ul>
          <li>
            <a
              routerLink="/"
              title="Home - Books List"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              >Books List</a
            >
          </li>
          <li>
            <a
              routerLink="/add"
              title="Add new book"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              >Add Book</a
            >
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main> `,

  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
