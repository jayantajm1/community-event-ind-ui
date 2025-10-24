import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent {
  title = '';
  description = '';
  startDatetime = '';
  endDatetime = '';
  locationAddress = '';
  maxParticipants: number | undefined;
  eventType = '';
  visibility: 'public' | 'community' | 'private' = 'public';
  loading = false;
  error = '';

  constructor(private eventService: EventService, private router: Router) {}

  onSubmit(): void {
    if (
      !this.title ||
      !this.description ||
      !this.startDatetime ||
      !this.endDatetime ||
      !this.locationAddress
    ) {
      this.error = 'Please fill in all required fields';
      return;
    }

    if (new Date(this.startDatetime) >= new Date(this.endDatetime)) {
      this.error = 'End date must be after start date';
      return;
    }

    this.loading = true;
    this.error = '';

    this.eventService
      .create({
        title: this.title,
        description: this.description,
        startDatetime: this.startDatetime,
        endDatetime: this.endDatetime,
        locationAddress: this.locationAddress,
        maxParticipants: this.maxParticipants,
        eventType: this.eventType,
        visibility: this.visibility,
      })
      .subscribe({
        next: (event) => {
          this.loading = false;
          this.router.navigate(['/events', event.id]);
        },
        error: () => {
          this.loading = false;
          this.error = 'Failed to create event. Please try again.';
        },
      });
  }
}
