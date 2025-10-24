import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent {
  categories = [
    {
      name: 'Getting Started',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click the Sign Up button and fill in your details.',
        },
        {
          q: 'Is the platform free to use?',
          a: 'Yes, creating an account and browsing events is completely free.',
        },
      ],
    },
    {
      name: 'Events',
      questions: [
        {
          q: 'How do I create an event?',
          a: 'Navigate to Create Event from the menu and fill in the event details.',
        },
        {
          q: 'Can I edit my event?',
          a: 'Yes, you can edit your events from the event page.',
        },
      ],
    },
    {
      name: 'Communities',
      questions: [
        {
          q: 'How do I join a community?',
          a: 'Click the Join button on any community page.',
        },
        {
          q: 'Can I create my own community?',
          a: 'Yes, use the Create Community option from the menu.',
        },
      ],
    },
  ];
}
