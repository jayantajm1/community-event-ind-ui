import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event?: Event;
  loading = false;
  message = '';
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventService.getById(id).subscribe((e) => (this.event = e));
    }
  }

  register() {
    if (!this.event) return;
    this.loading = true;
    // demo uses static user id
    this.eventService.register(this.event.id, 'u2').subscribe((res) => {
      this.loading = false;
      this.message = res.success
        ? 'Registered successfully'
        : res.message || 'Failed';
    });
  }
}
