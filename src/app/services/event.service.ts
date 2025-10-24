import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { MOCK_EVENTS } from '../mock/mock-data';
import { Observable, of } from 'rxjs';

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
    // Demo: not persisting registrations; check capacity
    const ev = this.events.find((e) => e.id === eventId);
    if (!ev) return of({ success: false, message: 'Event not found' });
    // In real app, we'd check current registrations count
    return of({ success: true });
  }
}
