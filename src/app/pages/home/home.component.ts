import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.list().subscribe((e) => (this.events = e));
  }

  getEventIcon(category: string): string {
    const icons: { [key: string]: string } = {
      Music: '🎵',
      Sports: '🏃',
      Technology: '💻',
      Arts: '🎭',
      Food: '🍔',
      Education: '📚',
      Business: '💼',
      Health: '🏥',
      Social: '🎉',
      Entertainment: '🎪',
      Workshop: '🛠️',
      Conference: '🎤',
    };
    return icons[category] || '🎉';
  }
}
