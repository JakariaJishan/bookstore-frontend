import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitLogin() {
    let loginData = {
      username: this.loginForm.value.username,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.authService.login(loginData);
  }
}
