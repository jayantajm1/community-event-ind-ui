export interface Event {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  communityId?: string;
  organizerId?: string;
  eventType?: string;
  tags?: string[];
  startDatetime?: string; // ISO
  endDatetime?: string; // ISO
  locationAddress?: string;
  locationLat?: number;
  locationLng?: number;
  images?: string[];
  maxParticipants?: number;
  registrationMode?: 'auto' | 'manual';
  visibility?: 'public' | 'community' | 'private';
  status?: 'draft' | 'published' | 'ongoing' | 'closed';
  createdAt?: string;
  updatedAt?: string;
}
