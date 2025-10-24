export interface Registration {
  id: string;
  eventId: string;
  userId: string;
  communityId?: string;
  registrationData?: any;
  status?: 'registered' | 'approved' | 'rejected' | 'cancelled';
  registeredAt?: string;
  checkedInAt?: string | null;
}
