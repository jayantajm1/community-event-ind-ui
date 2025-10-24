import { Component } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css'],
})
export class HelpCenterComponent {
  faqs = [
    {
      question: 'How do I create an event?',
      answer:
        'Click on "Create Event" in the navigation menu, fill in the event details including title, description, date, time, and location, then click submit.',
    },
    {
      question: 'How can I join a community?',
      answer:
        'Browse communities, find one that interests you, and click the "Join" button on the community page.',
    },
    {
      question: 'Can I edit my event after creating it?',
      answer:
        'Yes, go to the event page and click the "Edit" button if you are the event creator.',
    },
    {
      question: 'How do I cancel my event registration?',
      answer:
        'Visit the event page and click the "Cancel Registration" button.',
    },
  ];
}
