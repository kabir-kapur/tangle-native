import { RSVP } from '@/types/rsvp';

export const rsvps: RSVP[] = [
    {
        id: 'rsvp1',
        userId: 'user1', // kabirkapur
        eventId: 'event7', // Code sesh event
        status: 'going',
        createdAt: '2024-02-13T10:00:00Z',
    },
    {
        id: 'rsvp2',
        userId: 'user2', // jdog
        eventId: 'event6', // gay sex orgy
        status: 'not_going',
        createdAt: '2024-02-12T11:00:00Z',
    },
    {
        id: 'rsvp3',
        userId: 'user3', // corykum
        eventId: 'event7', // Code sesh event
        status: 'maybe',
        createdAt: '2024-02-13T11:00:00Z',
    },
    {
        id: 'rsvp4',
        userId: 'user1', // kabirkapur
        eventId: 'event1', // Open Mic Night
        status: 'going',
        createdAt: '2024-02-01T09:00:00Z',
    }
];
