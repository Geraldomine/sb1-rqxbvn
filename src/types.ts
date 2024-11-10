export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  sport: string;
  date: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  organizer: User;
  image: string;
}

export interface Review {
  id: string;
  eventId: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
}