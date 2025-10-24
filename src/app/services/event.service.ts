import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { MOCK_EVENTS } from '../mock/mock-data';
import { Observable, of } from 'rxjs';

export interface CreateEventRequest {
  title: string;
  description: string;
  startDatetime: string;
  endDatetime: string;
  locationAddress: string;
  maxParticipants?: number;
  communityId?: string;
  eventType?: string;
  tags?: string[];
  visibility?: 'public' | 'community' | 'private';
}

export interface UpdateEventRequest {
  title?: string;
  description?: string;
  startDatetime?: string;
  endDatetime?: string;
  locationAddress?: string;
  maxParticipants?: number;
  eventType?: string;
  tags?: string[];
}

@Injectable({ providedIn: 'root' })
export class EventService {
  private events: Event[] = MOCK_EVENTS.slice();

  list(): Observable<Event[]> {
    return of(this.events);
  }

  getById(id: string): Observable<Event | undefined> {
    const ev = this.events.find((e) => e.id === id);
    return of(ev);
  }

  search(query: string): Observable<Event[]> {
    const q = query.toLowerCase();
    const res = this.events.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        (e.description || '').toLowerCase().includes(q)
    );
    return of(res);
  }

  register(
    eventId: string,
    userId: string
  ): Observable<{ success: boolean; message?: string }> {
    const ev = this.events.find((e) => e.id === eventId);
    if (!ev) return of({ success: false, message: 'Event not found' });
    return of({ success: true });
  }

  create(request: CreateEventRequest): Observable<Event> {
    const newEvent: Event = {
      id: Date.now().toString(),
      title: request.title,
      slug: request.title.toLowerCase().replace(/\s+/g, '-'),
      description: request.description,
      startDatetime: request.startDatetime,
      endDatetime: request.endDatetime,
      locationAddress: request.locationAddress,
      maxParticipants: request.maxParticipants,
      communityId: request.communityId,
      eventType: request.eventType,
      tags: request.tags,
      visibility: request.visibility || 'public',
      status: 'draft',
      createdAt: new Date().toISOString(),
    };
    this.events.push(newEvent);
    return of(newEvent);
  }

  update(id: string, request: UpdateEventRequest): Observable<Event> {
    const ev = this.events.find((e) => e.id === id);
    if (ev) {
      Object.assign(ev, {
        ...request,
        updatedAt: new Date().toISOString(),
      });
      return of(ev);
    }
    return of(this.events[0]);
  }

  publish(eventId: string): Observable<{ message: string }> {
    const ev = this.events.find((e) => e.id === eventId);
    if (ev) {
      ev.status = 'published';
    }
    return of({ message: 'Event published successfully!' });
  }

  close(eventId: string): Observable<{ message: string }> {
    const ev = this.events.find((e) => e.id === eventId);
    if (ev) {
      ev.status = 'closed';
    }
    return of({ message: 'Event closed successfully!' });
  }

  getParticipants(eventId: string): Observable<any[]> {
    return of([
      {
        id: '1',
        fullName: 'John Doe',
        email: 'john@example.com',
        registeredAt: '2024-01-15',
      },
      {
        id: '2',
        fullName: 'Jane Smith',
        email: 'jane@example.com',
        registeredAt: '2024-01-16',
      },
    ]);
  }
}
