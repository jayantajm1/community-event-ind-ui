export interface Community {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  city?: string;
  region?: string;
  location?: { lat: number; lng: number } | null;
  visibility?: 'public' | 'private';
  createdBy?: string; // user id
}
