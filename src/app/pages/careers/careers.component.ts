import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})
export class CareersComponent {
  positions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description:
        'Join our engineering team to build innovative features for our community platform.',
    },
    {
      title: 'Community Manager',
      department: 'Community',
      location: 'New York, NY',
      type: 'Full-time',
      description:
        'Help grow and nurture our global community of event organizers and attendees.',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description:
        'Create beautiful and intuitive user experiences that delight our users.',
    },
  ];
}
