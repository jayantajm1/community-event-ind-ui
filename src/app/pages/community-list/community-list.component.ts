import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../../services/community.service';
import { Community } from '../../models/community.model';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css'],
})
export class CommunityListComponent implements OnInit {
  communities: Community[] = [];
  filteredCommunities: Community[] = [];
  loading = true;
  searchQuery = '';

  constructor(
    private communityService: CommunityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCommunities();
  }

  loadCommunities(): void {
    this.communityService.getAllCommunities().subscribe({
      next: (communities) => {
        this.communities = communities;
        this.filteredCommunities = communities;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.filteredCommunities = this.communities;
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredCommunities = this.communities.filter(
      (community) =>
        community.name.toLowerCase().includes(query) ||
        community.description?.toLowerCase().includes(query) ||
        community.city?.toLowerCase().includes(query) ||
        community.region?.toLowerCase().includes(query)
    );
  }

  viewCommunity(id: string): void {
    this.router.navigate(['/communities', id]);
  }

  createCommunity(): void {
    this.router.navigate(['/communities/create']);
  }
}
