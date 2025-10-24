import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from '../models/user.model';
import { MOCK_USERS, TEST_CREDENTIALS } from '../mock/mock-data';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  fullName: string;
  email: string;
  password: string;
  username?: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private tokenKey = 'auth_token';
  private refreshTokenKey = 'refresh_token';
  private userKey = 'current_user';

  constructor() {
    // Check if user is already logged in
    const token = this.getToken();
    const savedUser = localStorage.getItem(this.userKey);
    if (token && savedUser) {
      try {
        const user = JSON.parse(savedUser);
        this.currentUserSubject.next(user);
      } catch (e) {
        this.clearTokens();
      }
    }
  }

  signup(request: SignupRequest): Observable<AuthResponse> {
    // Mock signup - replace with real HTTP call
    const mockResponse: AuthResponse = {
      token: 'mock_jwt_token_' + Date.now(),
      refreshToken: 'mock_refresh_token_' + Date.now(),
      user: {
        id: 'u' + Date.now(),
        fullName: request.fullName,
        email: request.email,
        username: request.username || request.email.split('@')[0],
        role: 'member',
      },
    };

    return of(mockResponse).pipe(
      delay(500), // Simulate network delay
      tap((response) => {
        this.setTokens(response.token, response.refreshToken);
        this.setCurrentUser(response.user);
      })
    );
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    // Validate credentials against test data
    const validCredential = TEST_CREDENTIALS.find(
      (cred) =>
        cred.email === request.email && cred.password === request.password
    );

    if (!validCredential) {
      return throwError(() => ({
        error: { message: 'Invalid email or password' },
      })).pipe(delay(500));
    }

    // Find the user
    let user = MOCK_USERS.find((u) => u.email === request.email);

    // If not found in MOCK_USERS, create a demo user
    if (!user) {
      user = {
        id: 'demo',
        fullName: 'Demo User',
        email: request.email,
        username: request.email.split('@')[0],
        role: 'member',
        bio: 'Welcome! This is a demo account.',
      };
    }

    const mockResponse: AuthResponse = {
      token: 'mock_jwt_token_' + Date.now(),
      refreshToken: 'mock_refresh_token_' + Date.now(),
      user: user,
    };

    return of(mockResponse).pipe(
      delay(500), // Simulate network delay
      tap((response) => {
        this.setTokens(response.token, response.refreshToken);
        this.setCurrentUser(response.user);
      })
    );
  }

  logout(): Observable<void> {
    // Mock logout - replace with real HTTP call
    return of(void 0).pipe(
      tap(() => {
        this.clearTokens();
        this.currentUserSubject.next(null);
      })
    );
  }

  refreshToken(): Observable<{ token: string; refreshToken: string }> {
    const currentRefreshToken = this.getRefreshToken();
    // Mock refresh - replace with real HTTP call
    const mockResponse = {
      token: 'mock_jwt_token_refreshed_' + Date.now(),
      refreshToken: 'mock_refresh_token_refreshed_' + Date.now(),
    };

    return of(mockResponse).pipe(
      tap((response) => {
        this.setTokens(response.token, response.refreshToken);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  private setTokens(token: string, refreshToken: string): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  private setCurrentUser(user: User): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private clearTokens(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.userKey);
  }
}
