import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface EventReport {
  id: string;
  eventId: string;
  eventTitle: string;
  reportedBy: string;
  reason: string;
  status: 'pending' | 'resolved' | 'rejected';
  createdAt: string;
}

export interface UserReport {
  id: string;
  userId: string;
  userName: string;
  reportedBy: string;
  reason: string;
  status: 'pending' | 'resolved' | 'rejected';
  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private mockEventReports: EventReport[] = [
    {
      id: '1',
      eventId: '1',
      eventTitle: 'Tech Meetup 2024',
      reportedBy: 'user123',
      reason: 'Inappropriate content',
      status: 'pending',
      createdAt: '2024-01-15T10:00:00Z',
    },
    {
      id: '2',
      eventId: '2',
      eventTitle: 'Community Cleanup Drive',
      reportedBy: 'user456',
      reason: 'Spam event',
      status: 'pending',
      createdAt: '2024-01-16T14:30:00Z',
    },
  ];

  private mockUserReports: UserReport[] = [
    {
      id: '1',
      userId: '2',
      userName: 'Jane Smith',
      reportedBy: 'user789',
      reason: 'Abusive behavior',
      status: 'pending',
      createdAt: '2024-01-17T09:00:00Z',
    },
  ];

  constructor() {}

  getEventReports(): Observable<EventReport[]> {
    return of(this.mockEventReports);
  }

  getUserReports(): Observable<UserReport[]> {
    return of(this.mockUserReports);
  }

  resolveEventReport(reportId: string): Observable<{ message: string }> {
    const report = this.mockEventReports.find((r) => r.id === reportId);
    if (report) {
      report.status = 'resolved';
    }
    return of({ message: 'Event report resolved successfully' });
  }

  resolveUserReport(reportId: string): Observable<{ message: string }> {
    const report = this.mockUserReports.find((r) => r.id === reportId);
    if (report) {
      report.status = 'resolved';
    }
    return of({ message: 'User report resolved successfully' });
  }

  rejectEventReport(reportId: string): Observable<{ message: string }> {
    const report = this.mockEventReports.find((r) => r.id === reportId);
    if (report) {
      report.status = 'rejected';
    }
    return of({ message: 'Event report rejected' });
  }

  rejectUserReport(reportId: string): Observable<{ message: string }> {
    const report = this.mockUserReports.find((r) => r.id === reportId);
    if (report) {
      report.status = 'rejected';
    }
    return of({ message: 'User report rejected' });
  }

  banUser(userId: string, reason: string): Observable<{ message: string }> {
    return of({ message: `User ${userId} has been banned. Reason: ${reason}` });
  }

  unbanUser(userId: string): Observable<{ message: string }> {
    return of({ message: `User ${userId} has been unbanned` });
  }

  getStats(): Observable<any> {
    return of({
      totalUsers: 150,
      totalEvents: 45,
      totalCommunities: 12,
      pendingReports:
        this.mockEventReports.filter((r) => r.status === 'pending').length +
        this.mockUserReports.filter((r) => r.status === 'pending').length,
      activeEvents: 30,
      bannedUsers: 3,
    });
  }
}
