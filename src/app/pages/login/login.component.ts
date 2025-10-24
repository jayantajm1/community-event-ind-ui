import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface TestCredential {
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  error = '';
  showCredentials = false;

  testCredentials: TestCredential[] = [
    { email: 'priya@example.com', password: 'password123', role: '👑 Host' },
    { email: 'ravi@example.com', password: 'password123', role: '👤 Member' },
    { email: 'jayanta@example.com', password: 'admin123', role: '⚡ Admin' },
    {
      email: 'arjun@example.com',
      password: 'password123',
      role: '🛡️ Moderator',
    },
    {
      email: 'neha@example.com',
      password: 'password123',
      role: '🍔 Food Enthusiast',
    },
    { email: 'demo@example.com', password: 'demo123', role: '✨ Demo' },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  toggleCredentials(): void {
    this.showCredentials = !this.showCredentials;
  }

  useCredential(credential: TestCredential): void {
    this.email = credential.email;
    this.password = credential.password;
    this.showCredentials = false;
  }

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.error = 'Please fill in all fields';
      return;
    }

    this.loading = true;
    this.error = '';

    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          this.loading = false;
          this.error = 'Invalid email or password';
        },
      });
  }
}
