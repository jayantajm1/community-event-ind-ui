import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { MOCK_USERS } from '../mock/mock-data';

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
    return of(user || MOCK_USERS[0]);
  }

  updateProfile(id: string, request: UpdateProfileRequest): Observable<User> {
    const user = MOCK_USERS.find((u) => u.id === id);
    if (user) {
      const updatedUser: User = {
        ...user,
        ...request,
      };
      return of(updatedUser);
    }
    return of(MOCK_USERS[0]);
  }

  getUserEvents(userId: string): Observable<any[]> {
    // Mock user events
    return of([
      {
        id: '1',
        title: 'Tech Meetup 2024',
        date: '2024-02-15',
        status: 'registered',
      },
      {
        id: '2',
        title: 'Community Cleanup Drive',
        date: '2024-02-20',
        status: 'attended',
      },
    ]);
  }

  getUserCommunities(userId: string): Observable<any[]> {
    // Mock user communities
    return of([
      {
        id: '1',
        name: 'Tech Enthusiasts',
        role: 'member',
        joinedDate: '2024-01-10',
      },
    ]);
  }
}
