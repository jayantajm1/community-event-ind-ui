import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user.model';
import { MOCK_USERS, USER_EVENTS, USER_COMMUNITIES } from '../mock/mock-data';

export interface UpdateProfileRequest {
  fullName?: string;
  email?: string;
  username?: string;
  bio?: string;
  profilePicture?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUserById(id: string): Observable<User> {
    const user = MOCK_USERS.find((u) => u.id === id);
    return of(user || MOCK_USERS[0]).pipe(delay(300));
  }

  updateProfile(id: string, request: UpdateProfileRequest): Observable<User> {
    const user = MOCK_USERS.find((u) => u.id === id);
    if (user) {
      const updatedUser: User = {
        ...user,
        ...request,
      };

      // Update in local storage if this is the current user
      const currentUserJson = localStorage.getItem('current_user');
      if (currentUserJson) {
        try {
          const currentUser = JSON.parse(currentUserJson);
          if (currentUser.id === id) {
            localStorage.setItem('current_user', JSON.stringify(updatedUser));
          }
        } catch (e) {
          // Ignore parse errors
        }
      }

      return of(updatedUser).pipe(delay(500));
    }
    return of(MOCK_USERS[0]).pipe(delay(500));
  }

  getUserEvents(userId: string): Observable<any[]> {
    // Get user events from mock data
    const events = USER_EVENTS[userId] || [];
    return of(events).pipe(delay(300));
  }

  getUserCommunities(userId: string): Observable<any[]> {
    // Get user communities from mock data
    const communities = USER_COMMUNITIES[userId] || [];
    return of(communities).pipe(delay(300));
  }
}
