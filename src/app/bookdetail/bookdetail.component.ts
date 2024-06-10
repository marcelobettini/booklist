import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  standalone: true,
  imports: [],
  template: `
    <p>bookdetail works!</p>
    <p>{{ route }}</p>
  `,
  styleUrl: './bookdetail.component.css',
})
export class BookdetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
}
