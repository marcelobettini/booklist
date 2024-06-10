import { Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { BookformComponent } from './bookform/bookform.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
export const routes: Routes = [
  { path: '', component: BooklistComponent, title: 'Books|Home' },
  { path: 'add', component: BookformComponent, title: 'Books|Add' },
  { path: 'detail/:id', component: BookdetailComponent, title: 'Books|Detail' },
  { path: '**', component: NotfoundComponent },
];
