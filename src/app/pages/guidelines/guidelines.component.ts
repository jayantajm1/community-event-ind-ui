import { Component } from '@angular/core';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.css'],
})
export class GuidelinesComponent {
  guidelines = [
    {
      title: 'Community Standards',
      icon: '👥',
      rules: [
        'Treat all members with respect and kindness',
        'No harassment, hate speech, or discrimination',
        'Keep discussions relevant to the community',
        'Report inappropriate behavior to moderators',
      ],
    },
    {
      title: 'Event Guidelines',
      icon: '🎉',
      rules: [
        'Provide accurate event information',
        'Respect venue rules and capacity limits',
        'Communicate changes promptly to attendees',
        'Ensure accessibility for all participants',
      ],
    },
    {
      title: 'Content Policy',
      icon: '📋',
      rules: [
        'Share only appropriate and legal content',
        'Respect intellectual property rights',
        'No spam or excessive self-promotion',
        'Keep content family-friendly when required',
      ],
    },
  ];
}
