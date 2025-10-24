import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-community-create',
  templateUrl: './community-create.component.html',
  styleUrls: ['./community-create.component.css'],
})
export class CommunityCreateComponent {
  name = '';
  description = '';
  city = '';
  region = '';
  visibility: 'public' | 'private' = 'public';
  loading = false;
  error = '';

  constructor(
    private communityService: CommunityService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.name || !this.description || !this.city) {
      this.error = 'Please fill in all required fields';
      return;
    }

    this.loading = true;
    this.error = '';

    this.communityService
      .createCommunity({
        name: this.name,
        description: this.description,
        city: this.city,
        region: this.region,
        visibility: this.visibility,
      })
      .subscribe({
        next: (community) => {
          this.loading = false;
          this.router.navigate(['/communities', community.id]);
        },
        error: () => {
          this.loading = false;
          this.error = 'Failed to create community. Please try again.';
        },
      });
  }
}
