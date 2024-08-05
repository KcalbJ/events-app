'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { formatDate, formatTime } from '@/lib/utils';
import { fetchEvents } from './action';

export default function Page({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  
  const [events, setEvents] = useState(params || []);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    async function loadEvents() {
      const fetchedEvents = await fetchEvents(selectedCategory);
      setEvents(fetchedEvents);
    }

    loadEvents();
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    router.push(`/events${category ? `?category=${category}` : ''}`);
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="bg-secondary py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-secondary-foreground sm:text-4xl md:text-5xl">
              Discover Upcoming Events
            </h1>
            <p className="text-secondary-foreground/80 md:text-lg">
              Explore a wide range of events and find the perfect one for you.
            </p>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="mt-4 p-2 border rounded-md"
            >
              <option value="">All Categories</option>
              <option value="music">Music</option>
              <option value="art">Art</option>
              <option value="food">Food</option>
              <option value="sports">Sports</option>
              <option value="education">Education</option>
              <option value="community">Community</option>
            </select>
          </div>
        </div>
      </section>
      <main className="flex-1 gap-8 p-4 md:p-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-1  container  lg:grid-cols-3 gap-4 md:gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="bg-background  rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={event.imgUrl || '/placeholder.svg'}
                alt={event.name}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: '600/400', objectFit: 'cover' }}
              />
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg font-semibold tracking-tight">
                  {event.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(event.startDateTime)}</span>
                  <Clock className="w-4 h-4" />
                  <span>{formatTime(event.startDateTime)}</span>
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs">
                    {event.category}
                  </Badge>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {event.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-semibold">£{event.price.toFixed(2)}</div>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    View Event
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}