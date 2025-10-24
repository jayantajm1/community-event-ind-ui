import { Component, OnInit } from '@angular/core';
import {
  AdminService,
  EventReport,
  UserReport,
} from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  stats: any = null;
  eventReports: EventReport[] = [];
  userReports: UserReport[] = [];
  loading = true;
  success = '';
  error = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loading = true;

    this.adminService.getStats().subscribe((stats) => {
      this.stats = stats;
    });

    this.adminService.getEventReports().subscribe((reports) => {
      this.eventReports = reports;
      this.loading = false;
    });

    this.adminService.getUserReports().subscribe((reports) => {
      this.userReports = reports;
    });
  }

  resolveEventReport(reportId: string): void {
    this.adminService.resolveEventReport(reportId).subscribe({
      next: (response) => {
        this.success = response.message;
        this.loadDashboardData();
      },
      error: () => {
        this.error = 'Failed to resolve report';
      },
    });
  }

  rejectEventReport(reportId: string): void {
    this.adminService.rejectEventReport(reportId).subscribe({
      next: (response) => {
        this.success = response.message;
        this.loadDashboardData();
      },
      error: () => {
        this.error = 'Failed to reject report';
      },
    });
  }

  resolveUserReport(reportId: string): void {
    this.adminService.resolveUserReport(reportId).subscribe({
      next: (response) => {
        this.success = response.message;
        this.loadDashboardData();
      },
      error: () => {
        this.error = 'Failed to resolve report';
      },
    });
  }

  rejectUserReport(reportId: string): void {
    this.adminService.rejectUserReport(reportId).subscribe({
      next: (response) => {
        this.success = response.message;
        this.loadDashboardData();
      },
      error: () => {
        this.error = 'Failed to reject report';
      },
    });
  }

  banUser(userId: string): void {
    const reason = prompt('Enter reason for banning this user:');
    if (reason) {
      this.adminService.banUser(userId, reason).subscribe({
        next: (response) => {
          this.success = response.message;
          this.loadDashboardData();
        },
        error: () => {
          this.error = 'Failed to ban user';
        },
      });
    }
  }
}
