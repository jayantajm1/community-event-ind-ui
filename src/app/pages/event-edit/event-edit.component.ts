import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css'],
})
export class EventEditComponent implements OnInit {
  eventId: string | null = null;
  event: Event | null = null;

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
  success = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id');
    if (this.eventId) {
      this.loadEvent(this.eventId);
    }
  }

  loadEvent(id: string): void {
    this.loading = true;
    this.eventService.getById(id).subscribe({
      next: (event) => {
        if (event) {
          this.event = event;
          this.title = event.title;
          this.description = event.description || '';
          this.startDatetime = event.startDatetime || '';
          this.endDatetime = event.endDatetime || '';
          this.locationAddress = event.locationAddress || '';
          this.maxParticipants = event.maxParticipants;
          this.eventType = event.eventType || '';
          this.visibility = event.visibility || 'public';
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to load event';
      },
    });
  }

  onSubmit(): void {
    if (!this.eventId) return;

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
    this.success = '';

    this.eventService
      .update(this.eventId, {
        title: this.title,
        description: this.description,
        startDatetime: this.startDatetime,
        endDatetime: this.endDatetime,
        locationAddress: this.locationAddress,
        maxParticipants: this.maxParticipants,
        eventType: this.eventType,
      })
      .subscribe({
        next: () => {
          this.loading = false;
          this.success = 'Event updated successfully!';
          setTimeout(() => {
            this.router.navigate(['/events', this.eventId]);
          }, 1500);
        },
        error: () => {
          this.loading = false;
          this.error = 'Failed to update event. Please try again.';
        },
      });
  }

  publishEvent(): void {
    if (!this.eventId) return;

    this.eventService.publish(this.eventId).subscribe({
      next: (response) => {
        this.success = response.message;
        if (this.event) {
          this.event.status = 'published';
        }
      },
      error: () => {
        this.error = 'Failed to publish event';
      },
    });
  }

  closeEvent(): void {
    if (!this.eventId) return;

    this.eventService.close(this.eventId).subscribe({
      next: (response) => {
        this.success = response.message;
        if (this.event) {
          this.event.status = 'closed';
        }
      },
      error: () => {
        this.error = 'Failed to close event';
      },
    });
  }
}
