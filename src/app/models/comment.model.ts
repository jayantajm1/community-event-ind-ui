export interface Comment {
  id: string;
  content: string;
  userId: string;
  userName?: string;
  eventId: string;
  createdAt: string;
  updatedAt?: string;
}
