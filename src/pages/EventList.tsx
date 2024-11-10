import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import EventCard from '../components/EventCard';
import { Event } from '../types';

function EventList() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - replace with actual API call
  const events: Event[] = [
    {
      id: '1',
      title: 'Weekend Basketball Tournament',
      description: 'Join us for a friendly basketball tournament',
      sport: 'Basketball',
      date: '2024-03-20T14:00:00Z',
      location: 'Central Park Courts',
      maxParticipants: 20,
      currentParticipants: 12,
      organizer: {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com'
      },
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      title: 'Soccer Match',
      description: 'Casual soccer game for all skill levels',
      sport: 'Soccer',
      date: '2024-03-22T16:00:00Z',
      location: 'Riverside Field',
      maxParticipants: 22,
      currentParticipants: 15,
      organizer: {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com'
      },
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;