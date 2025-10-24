import { Event } from '../models/event.model';
import { User } from '../models/user.model';
import { Community } from '../models/community.model';

// Test Users with credentials
export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    fullName: 'Priya Sharma',
    email: 'priya@example.com',
    username: 'priya',
    role: 'host',
    avatarUrl: '',
    bio: 'Community organizer passionate about bringing people together. Love creating memorable events!',
  },
  {
    id: 'u2',
    fullName: 'Ravi Kumar',
    email: 'ravi@example.com',
    username: 'ravi',
    role: 'member',
    bio: 'Tech enthusiast and fitness lover. Always up for new adventures!',
  },
  {
    id: 'u3',
    fullName: 'Anjali Verma',
    email: 'anjali@example.com',
    username: 'anjali',
    role: 'admin',
    bio: 'Platform administrator. Ensuring smooth experiences for all community members.',
  },
  {
    id: 'u4',
    fullName: 'Arjun Patel',
    email: 'arjun@example.com',
    username: 'arjun',
    role: 'moderator',
    bio: 'Community moderator and event photographer. Capturing special moments!',
  },
  {
    id: 'u5',
    fullName: 'Neha Singh',
    email: 'neha@example.com',
    username: 'neha',
    role: 'member',
    bio: 'Food blogger and cooking enthusiast. Love organizing food-related events!',
  },
];

// Test credentials - email/password combinations
export const TEST_CREDENTIALS = [
  { email: 'priya@example.com', password: 'password123' },
  { email: 'ravi@example.com', password: 'password123' },
  { email: 'anjali@example.com', password: 'admin123' },
  { email: 'arjun@example.com', password: 'password123' },
  { email: 'neha@example.com', password: 'password123' },
  { email: 'demo@example.com', password: 'demo123' }, // Generic demo account
];

// User Events - Events each user has registered for
export const USER_EVENTS: { [userId: string]: any[] } = {
  u1: [
    {
      id: 'e1',
      title: 'Community Food Drive',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
      status: 'registered',
      role: 'organizer',
    },
    {
      id: 'e3',
      title: 'Tech Workshop: Web Development',
      date: new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString(),
      status: 'registered',
      role: 'organizer',
    },
    {
      id: 'e5',
      title: 'Music Festival 2024',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
      status: 'attended',
      role: 'organizer',
    },
  ],
  u2: [
    {
      id: 'e2',
      title: 'Evening Yoga Session',
      date: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
      status: 'registered',
      role: 'organizer',
    },
    {
      id: 'e1',
      title: 'Community Food Drive',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
      status: 'registered',
      role: 'attendee',
    },
    {
      id: 'e4',
      title: 'Marathon Training Camp',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
      status: 'attended',
      role: 'attendee',
    },
  ],
  u3: [
    {
      id: 'e3',
      title: 'Tech Workshop: Web Development',
      date: new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString(),
      status: 'registered',
      role: 'attendee',
    },
  ],
  u4: [
    {
      id: 'e1',
      title: 'Community Food Drive',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
      status: 'registered',
      role: 'attendee',
    },
    {
      id: 'e2',
      title: 'Evening Yoga Session',
      date: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
      status: 'registered',
      role: 'attendee',
    },
  ],
  u5: [
    {
      id: 'e6',
      title: 'Cooking Masterclass',
      date: new Date(Date.now() + 1000 * 60 * 60 * 96).toISOString(),
      status: 'registered',
      role: 'organizer',
    },
    {
      id: 'e1',
      title: 'Community Food Drive',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
      status: 'registered',
      role: 'attendee',
    },
  ],
};

// User Communities - Communities each user has joined
export const USER_COMMUNITIES: { [userId: string]: any[] } = {
  u1: [
    {
      id: 'c1',
      name: 'Neighborhood Meetups',
      role: 'admin',
      joinedDate: '2024-01-10',
      memberCount: 150,
    },
    {
      id: 'c3',
      name: 'Tech Community',
      role: 'moderator',
      joinedDate: '2024-02-05',
      memberCount: 280,
    },
  ],
  u2: [
    {
      id: 'c2',
      name: 'Fitness Enthusiasts',
      role: 'admin',
      joinedDate: '2024-01-15',
      memberCount: 220,
    },
    {
      id: 'c1',
      name: 'Neighborhood Meetups',
      role: 'member',
      joinedDate: '2024-01-20',
      memberCount: 150,
    },
  ],
  u3: [
    {
      id: 'c1',
      name: 'Neighborhood Meetups',
      role: 'admin',
      joinedDate: '2024-01-01',
      memberCount: 150,
    },
    {
      id: 'c2',
      name: 'Fitness Enthusiasts',
      role: 'member',
      joinedDate: '2024-01-25',
      memberCount: 220,
    },
    {
      id: 'c3',
      name: 'Tech Community',
      role: 'admin',
      joinedDate: '2024-01-12',
      memberCount: 280,
    },
  ],
  u4: [
    {
      id: 'c1',
      name: 'Neighborhood Meetups',
      role: 'moderator',
      joinedDate: '2024-02-01',
      memberCount: 150,
    },
  ],
  u5: [
    {
      id: 'c4',
      name: 'Food Lovers Club',
      role: 'admin',
      joinedDate: '2024-01-08',
      memberCount: 195,
    },
    {
      id: 'c1',
      name: 'Neighborhood Meetups',
      role: 'member',
      joinedDate: '2024-02-10',
      memberCount: 150,
    },
  ],
};

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
  {
    id: 'c2',
    name: 'Fitness Enthusiasts',
    slug: 'fitness-enthusiasts',
    description: 'Stay fit and healthy with our community',
    city: 'Mumbai',
    region: 'MH',
    location: { lat: 19.076, lng: 72.8777 },
    visibility: 'public',
    createdBy: 'u2',
  },
  {
    id: 'c3',
    name: 'Tech Community',
    slug: 'tech-community',
    description: 'For tech enthusiasts and developers',
    city: 'Bangalore',
    region: 'KA',
    location: { lat: 12.9716, lng: 77.5946 },
    visibility: 'public',
    createdBy: 'u3',
  },
  {
    id: 'c4',
    name: 'Food Lovers Club',
    slug: 'food-lovers-club',
    description: 'Exploring culinary delights together',
    city: 'Delhi',
    region: 'DL',
    location: { lat: 28.7041, lng: 77.1025 },
    visibility: 'public',
    createdBy: 'u5',
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
    communityId: 'c2',
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
  {
    id: 'e3',
    title: 'Tech Workshop: Web Development',
    slug: 'tech-workshop-web-dev',
    description: 'Learn modern web development with hands-on projects.',
    communityId: 'c3',
    organizerId: 'u1',
    eventType: 'workshop',
    tags: ['tech', 'workshop', 'coding'],
    startDatetime: new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString(),
    endDatetime: new Date(Date.now() + 1000 * 60 * 60 * 76).toISOString(),
    locationAddress: 'Tech Hub, MG Road',
    locationLat: 12.9716,
    locationLng: 77.5946,
    images: [],
    maxParticipants: 40,
    registrationMode: 'auto',
    visibility: 'public',
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
