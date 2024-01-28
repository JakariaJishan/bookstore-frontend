import { Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '', component: BookComponent,title: "books", canActivate: [AuthGuard]
    },
    {
        path:"book/:id", component: BookdetailsComponent, title: "Single Book"
    },
    {
        path:"login", component: LoginComponent, title: "login"
    }
];
