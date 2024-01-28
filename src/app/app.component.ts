import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookstore-frontend';
constructor(private authService: AuthService, private router: Router){}
  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
