import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

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

  constructor() {
    // Check if user is already logged in
    const token = this.getToken();
    if (token) {
      // In a real app, validate token and load user data
      const mockUser: User = {
        id: 'u1',
        fullName: 'Demo User',
        email: 'demo@example.com',
        username: 'demo',
        role: 'member',
      };
      this.currentUserSubject.next(mockUser);
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
      tap((response) => {
        this.setTokens(response.token, response.refreshToken);
        this.currentUserSubject.next(response.user);
      })
    );
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    // Mock login - replace with real HTTP call
    const mockResponse: AuthResponse = {
      token: 'mock_jwt_token_' + Date.now(),
      refreshToken: 'mock_refresh_token_' + Date.now(),
      user: {
        id: 'u1',
        fullName: 'Demo User',
        email: request.email,
        username: 'demo',
        role: 'member',
      },
    };

    return of(mockResponse).pipe(
      tap((response) => {
        this.setTokens(response.token, response.refreshToken);
        this.currentUserSubject.next(response.user);
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

  private clearTokens(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }
}
