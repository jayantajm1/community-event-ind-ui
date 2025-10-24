import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment } from '../models/comment.model';

export interface CreateCommentRequest {
  content: string;
  eventId: string;
}

export interface UpdateCommentRequest {
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private mockComments: Comment[] = [
    {
      id: '1',
      content: 'Looking forward to this event!',
      userId: '1',
      userName: 'John Doe',
      eventId: '1',
      createdAt: '2024-01-10T10:00:00Z',
    },
    {
      id: '2',
      content: 'Great initiative! Count me in.',
      userId: '2',
      userName: 'Jane Smith',
      eventId: '1',
      createdAt: '2024-01-11T14:30:00Z',
    },
  ];

  constructor() {}

  getCommentsByEventId(eventId: string): Observable<Comment[]> {
    const comments = this.mockComments.filter((c) => c.eventId === eventId);
    return of(comments);
  }

  createComment(
    request: CreateCommentRequest,
    userId: string,
    userName: string
  ): Observable<Comment> {
    const newComment: Comment = {
      id: Date.now().toString(),
      content: request.content,
      userId: userId,
      userName: userName,
      eventId: request.eventId,
      createdAt: new Date().toISOString(),
    };
    this.mockComments.push(newComment);
    return of(newComment);
  }

  updateComment(
    commentId: string,
    request: UpdateCommentRequest
  ): Observable<Comment> {
    const comment = this.mockComments.find((c) => c.id === commentId);
    if (comment) {
      comment.content = request.content;
      comment.updatedAt = new Date().toISOString();
      return of(comment);
    }
    return of(this.mockComments[0]);
  }

  deleteComment(commentId: string): Observable<{ message: string }> {
    const index = this.mockComments.findIndex((c) => c.id === commentId);
    if (index !== -1) {
      this.mockComments.splice(index, 1);
    }
    return of({ message: 'Comment deleted successfully' });
  }
}
