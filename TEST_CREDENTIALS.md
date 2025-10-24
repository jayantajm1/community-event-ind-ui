# Test Credentials for Community Events Platform

This file contains test credentials you can use to login and test the application.

## Test User Accounts

### 1. Priya Sharma (Event Host)
- **Email:** `priya@example.com`
- **Password:** `password123`
- **Role:** Host
- **Profile:** Community organizer passionate about bringing people together
- **Communities:** Admin in "Neighborhood Meetups", Moderator in "Tech Community"
- **Events:** Organizer of 3 events (2 upcoming, 1 attended)

### 2. Ravi Kumar (Active Member)
- **Email:** `ravi@example.com`
- **Password:** `password123`
- **Role:** Member
- **Profile:** Tech enthusiast and fitness lover
- **Communities:** Admin in "Fitness Enthusiasts", Member in "Neighborhood Meetups"
- **Events:** Organizer of 1 event, Attendee of 2 events

### 3. Anjali Verma (Administrator)
- **Email:** `anjali@example.com`
- **Password:** `admin123`
- **Role:** Admin
- **Profile:** Platform administrator
- **Communities:** Admin in 2 communities, Member in 1
- **Events:** 1 upcoming event registration

### 4. Arjun Patel (Moderator)
- **Email:** `arjun@example.com`
- **Password:** `password123`
- **Role:** Moderator
- **Profile:** Community moderator and event photographer
- **Communities:** Moderator in "Neighborhood Meetups"
- **Events:** 2 upcoming events

### 5. Neha Singh (Food Enthusiast)
- **Email:** `neha@example.com`
- **Password:** `password123`
- **Role:** Member
- **Profile:** Food blogger and cooking enthusiast
- **Communities:** Admin in "Food Lovers Club", Member in "Neighborhood Meetups"
- **Events:** Organizer of cooking events

### 6. Demo Account (Generic)
- **Email:** `demo@example.com`
- **Password:** `demo123`
- **Role:** Member
- **Profile:** Generic demo account
- **Communities:** None
- **Events:** None

## Features to Test

### Login & Authentication
1. Login with any of the above credentials
2. View profile after login
3. Edit profile information
4. Logout

### Profile Management
1. View your profile at `/profile`
2. Click "Edit Profile" to modify:
   - Full Name
   - Email
   - Username
   - Bio
3. View registered events
4. View joined communities
5. See user statistics

### Navigation
- Each user has different events and communities to explore
- Try different accounts to see varying data

## Quick Start

1. Start the application: `ng serve`
2. Navigate to `http://localhost:4200`
3. Click on "Login" in the header
4. Use any email/password combination from above
5. Explore profile, events, and communities

## Notes

- All data is stored in mock files (`src/app/mock/mock-data.ts`)
- Passwords are validated but not encrypted (this is for testing only)
- User sessions persist in localStorage
- Changes to profile are simulated and not permanently saved
