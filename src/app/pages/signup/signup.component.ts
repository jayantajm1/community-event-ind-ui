import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  fullName = '';
  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  loading = false;
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (
      !this.fullName ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.error = 'Please fill in all required fields';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    if (this.password.length < 6) {
      this.error = 'Password must be at least 6 characters';
      return;
    }

    this.loading = true;
    this.error = '';

    this.authService
      .signup({
        fullName: this.fullName,
        email: this.email,
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.loading = false;
          this.error = 'Signup failed. Please try again.';
        },
      });
  }
}
