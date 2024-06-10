import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-bookform',
  standalone: true,
  imports: [],
  template: `
    <form>
      <input type="text" />
    </form>
  `,
  styleUrl: './bookform.component.css',
})
export class BookformComponent {}
