import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  stats = [
    { value: '10,000+', label: 'Active Users' },
    { value: '5,000+', label: 'Events Created' },
    { value: '500+', label: 'Communities' },
    { value: '50+', label: 'Countries' },
  ];

  team = [
    { name: 'Jayanta Mardi', role: 'CEO & Founder', icon: '👨‍💼' },
    { name: 'ABC Def', role: 'Head of Community', icon: '👩‍💼' },
    { name: 'DEF Chen', role: 'CTO', icon: '👨‍💻' },
    { name: 'GHI Davis', role: 'Product Manager', icon: '👩‍💻' },
  ];
}
