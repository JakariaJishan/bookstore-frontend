import { Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { SignupComponent } from './components/auth/signup/signup.component';
import { MybooksComponent } from './components/mybooks/mybooks.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '', component: BookComponent,title: "books", canActivate: [AuthGuard]
    },
    {
        path: 'my-booklist', component: MybooksComponent,title: "my booklist", canActivate: [AuthGuard]
    },
    {
        path:"book/:id", component: BookdetailsComponent, title: "Single Book", canActivate: [AuthGuard]
    },
    {
        path:"signup", component: SignupComponent, title: "signup"
    },
    {
        path:"login", component: LoginComponent, title: "login"
    }
];
