export interface User {
  id: string;
  fullName: string;
  email: string;
  username?: string;
  avatarUrl?: string;
  bio?: string;
  role?: 'member' | 'host' | 'admin' | 'moderator';
}
