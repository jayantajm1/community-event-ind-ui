import { Event } from '../models/event.model';
import { User } from '../models/user.model';
import { Community } from '../models/community.model';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    fullName: 'Priya Sharma',
    email: 'priya@example.com',
    username: 'priya',
    role: 'host',
    avatarUrl: '',
  },
  {
    id: 'u2',
    fullName: 'Ravi Kumar',
    email: 'ravi@example.com',
    username: 'ravi',
    role: 'member',
  },
];

export const MOCK_COMMUNITIES: Community[] = [
  {
    id: 'c1',
    name: 'Neighborhood Meetups',
    slug: 'neighborhood-meetups',
    description: 'Local community events and meetups',
    city: 'Kolkata',
    region: 'WB',
    location: { lat: 22.5726, lng: 88.3639 },
    visibility: 'public',
    createdBy: 'u1',
  },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Community Food Drive',
    slug: 'community-food-drive',
    description: 'Join us to collect and distribute food to those in need.',
    communityId: 'c1',
    organizerId: 'u1',
    eventType: 'charity',
    tags: ['food', 'charity', 'volunteer'],
    startDatetime: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    endDatetime: new Date(Date.now() + 1000 * 60 * 60 * 26).toISOString(),
    locationAddress: 'Community Hall, Sector 5',
    locationLat: 22.5726,
    locationLng: 88.3639,
    images: [],
    maxParticipants: 50,
    registrationMode: 'auto',
    visibility: 'public',
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'e2',
    title: 'Evening Yoga Session',
    slug: 'evening-yoga-session',
    description: 'Relaxing community yoga by the park.',
    communityId: 'c1',
    organizerId: 'u2',
    eventType: 'health',
    tags: ['yoga', 'health'],
    startDatetime: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
    endDatetime: new Date(Date.now() + 1000 * 60 * 60 * 50).toISOString(),
    locationAddress: 'Central Park',
    locationLat: 22.575,
    locationLng: 88.36,
    images: [],
    maxParticipants: 30,
    registrationMode: 'auto',
    visibility: 'public',
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
