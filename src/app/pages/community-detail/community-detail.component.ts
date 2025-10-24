import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from '../../services/community.service';
import { Community } from '../../models/community.model';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css'],
})
export class CommunityDetailComponent implements OnInit {
  community: Community | null = null;
  members: any[] = [];
  events: any[] = [];
  loading = true;
  isMember = false;
  joining = false;
  success = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private communityService: CommunityService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadCommunityData(id);
    }
  }

  loadCommunityData(id: string): void {
    this.communityService.getCommunityById(id).subscribe({
      next: (community) => {
        this.community = community;
        this.loading = false;

        this.communityService.getCommunityMembers(id).subscribe((members) => {
          this.members = members;
        });

        this.communityService.getCommunityEvents(id).subscribe((events) => {
          this.events = events;
        });
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  joinCommunity(): void {
    if (!this.community) return;

    this.joining = true;
    this.error = '';
    this.success = '';

    this.communityService.joinCommunity(this.community.id).subscribe({
      next: (response) => {
        this.joining = false;
        this.isMember = true;
        this.success = response.message;
      },
      error: () => {
        this.joining = false;
        this.error = 'Failed to join community. Please try again.';
      },
    });
  }

  leaveCommunity(): void {
    if (!this.community) return;

    this.joining = true;
    this.error = '';
    this.success = '';

    this.communityService.leaveCommunity(this.community.id).subscribe({
      next: (response) => {
        this.joining = false;
        this.isMember = false;
        this.success = response.message;
      },
      error: () => {
        this.joining = false;
        this.error = 'Failed to leave community. Please try again.';
      },
    });
  }
}
