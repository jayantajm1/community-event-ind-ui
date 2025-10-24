import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  posts = [
    {
      title: 'How to Host a Successful Community Event',
      date: '2025-10-20',
      author: 'Sarah Johnson',
      excerpt:
        'Learn the best practices for organizing memorable community events that engage participants.',
      image: '🎯',
    },
    {
      title: 'Building Strong Community Connections',
      date: '2025-10-15',
      author: 'Mike Chen',
      excerpt:
        'Discover strategies to foster meaningful relationships within your community.',
      image: '🤝',
    },
    {
      title: 'Event Planning Tips for Beginners',
      date: '2025-10-10',
      author: 'Emily Davis',
      excerpt:
        'A comprehensive guide to planning your first community event from start to finish.',
      image: '📝',
    },
  ];
}
