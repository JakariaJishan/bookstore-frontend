import { Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';

export const routes: Routes = [
    {
        path: '', component: BookComponent,title: "books"
    },
    {
        path:"book/:id", component: BookdetailsComponent, title: "Single Book"
    }
];
