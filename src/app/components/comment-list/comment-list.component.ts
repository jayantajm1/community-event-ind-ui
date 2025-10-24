import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';
import { Comment } from '../../models/comment.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  @Input() eventId: string = '';

  comments: Comment[] = [];
  newCommentContent = '';
  currentUser: User | null = null;
  loading = false;
  submitting = false;
  error = '';

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });

    if (this.eventId) {
      this.loadComments();
    }
  }

  loadComments(): void {
    this.loading = true;
    this.commentService.getCommentsByEventId(this.eventId).subscribe({
      next: (comments) => {
        this.comments = comments;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  onSubmitComment(): void {
    if (!this.newCommentContent.trim()) {
      this.error = 'Comment cannot be empty';
      return;
    }

    if (!this.currentUser) {
      this.error = 'You must be logged in to comment';
      return;
    }

    this.submitting = true;
    this.error = '';

    this.commentService
      .createComment(
        {
          content: this.newCommentContent,
          eventId: this.eventId,
        },
        this.currentUser.id,
        this.currentUser.fullName
      )
      .subscribe({
        next: (comment) => {
          this.comments.push(comment);
          this.newCommentContent = '';
          this.submitting = false;
        },
        error: () => {
          this.error = 'Failed to post comment';
          this.submitting = false;
        },
      });
  }

  deleteComment(commentId: string): void {
    if (confirm('Are you sure you want to delete this comment?')) {
      this.commentService.deleteComment(commentId).subscribe({
        next: () => {
          this.comments = this.comments.filter((c) => c.id !== commentId);
        },
        error: () => {
          this.error = 'Failed to delete comment';
        },
      });
    }
  }

  canDeleteComment(comment: Comment): boolean {
    return (
      this.currentUser?.id === comment.userId ||
      this.currentUser?.role === 'admin'
    );
  }
}
