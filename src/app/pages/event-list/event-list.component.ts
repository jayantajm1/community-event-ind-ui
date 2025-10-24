import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  query = '';
  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.load();
  }

  load() {
    if (this.query && this.query.trim().length) {
      this.eventService.search(this.query).subscribe((e) => (this.events = e));
    } else {
      this.eventService.list().subscribe((e) => (this.events = e));
    }
  }
}
