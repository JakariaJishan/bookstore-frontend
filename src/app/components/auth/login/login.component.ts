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
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitLogin() {
    let loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.authService.login(loginData);
  }
}
