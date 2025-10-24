import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  editMode = false;
  loading = false;
  error = '';
  success = '';

  // Form fields
  fullName = '';
  email = '';
  username = '';
  bio = '';

  userEvents: any[] = [];
  userCommunities: any[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.fullName = user.fullName;
        this.email = user.email;
        this.username = user.username || '';
        this.bio = user.bio || '';

        this.loadUserData(user.id);
      }
    });
  }

  loadUserData(userId: string): void {
    this.userService.getUserEvents(userId).subscribe((events) => {
      this.userEvents = events;
    });

    this.userService.getUserCommunities(userId).subscribe((communities) => {
      this.userCommunities = communities;
    });
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    this.error = '';
    this.success = '';
  }

  onSubmit(): void {
    if (!this.user) return;

    this.loading = true;
    this.error = '';
    this.success = '';

    this.userService
      .updateProfile(this.user.id, {
        fullName: this.fullName,
        email: this.email,
        username: this.username,
        bio: this.bio,
      })
      .subscribe({
        next: (updatedUser) => {
          this.loading = false;
          this.user = updatedUser;
          this.editMode = false;
          this.success = 'Profile updated successfully!';
        },
        error: (err) => {
          this.loading = false;
          this.error = 'Failed to update profile. Please try again.';
        },
      });
  }

  getRoleIcon(role?: string): string {
    const icons: { [key: string]: string } = {
      host: '👑',
      member: '👤',
      admin: '⚡',
      moderator: '🛡️',
    };
    return icons[role || 'member'] || '👤';
  }

  getEventStatusIcon(status: string): string {
    const icons: { [key: string]: string } = {
      registered: '🎫',
      attended: '✅',
      cancelled: '❌',
    };
    return icons[status] || '🎉';
  }
}
