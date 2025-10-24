import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Community } from '../models/community.model';
import { MOCK_COMMUNITIES } from '../mock/mock-data';

export interface CreateCommunityRequest {
  name: string;
  description: string;
  city: string;
  region?: string;
  visibility?: 'public' | 'private';
}

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  constructor() {}

  getAllCommunities(): Observable<Community[]> {
    return of(MOCK_COMMUNITIES);
  }

  getCommunityById(id: string): Observable<Community> {
    const community = MOCK_COMMUNITIES.find((c) => c.id === id);
    return of(community || MOCK_COMMUNITIES[0]);
  }

  createCommunity(request: CreateCommunityRequest): Observable<Community> {
    const newCommunity: Community = {
      id: Date.now().toString(),
      name: request.name,
      slug: request.name.toLowerCase().replace(/\s+/g, '-'),
      description: request.description,
      city: request.city,
      region: request.region,
      visibility: request.visibility || 'public',
      location: null,
    };
    return of(newCommunity);
  }

  joinCommunity(communityId: string): Observable<{ message: string }> {
    return of({ message: 'Successfully joined the community!' });
  }

  leaveCommunity(communityId: string): Observable<{ message: string }> {
    return of({ message: 'Successfully left the community!' });
  }

  getCommunityMembers(communityId: string): Observable<any[]> {
    return of([
      {
        id: '1',
        fullName: 'John Doe',
        role: 'admin',
        joinedDate: '2024-01-10',
      },
      {
        id: '2',
        fullName: 'Jane Smith',
        role: 'member',
        joinedDate: '2024-01-15',
      },
    ]);
  }

  getCommunityEvents(communityId: string): Observable<any[]> {
    return of([
      {
        id: '1',
        title: 'Tech Meetup 2024',
        date: '2024-02-15',
        attendees: 45,
      },
      {
        id: '2',
        title: 'Community Cleanup Drive',
        date: '2024-02-20',
        attendees: 32,
      },
    ]);
  }
}
