"use server"
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Card, CardContent, CardFooter } from "./ui/card";


export default async function UpcomingEvents() {
    
    const events = await prisma.event.findMany({
        where: {
          startDateTime: {
            gte: new Date(), // Fetch events that are upcoming
          },
        },
        orderBy: {
          startDateTime: 'asc', // Order by date ascending
        },
        take: 3, // Limit to 3 events
      });
    
    

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Events</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Community Events</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the most popular upcoming events in your area.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {events.map(event => (
            <Card key={event.id} className="border-0 rounded-none shadow-none">
              <CardContent className="p-0">
                <img
                  src={event.imgUrl}
                  width="400"
                  height="225"
                  alt={event.name}
                  className="object-cover aspect-video"
                />
              </CardContent>
              <CardFooter className="grid gap-2 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium">{event.name}</div>
                  <div className="text-sm text-muted-foreground">{new Date(event.startDateTime).toLocaleDateString()}</div>
                  <div className="text-sm text-muted-foreground">{new Date(event.endDateTime).toLocaleDateString()}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">{event.location}</div>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                     >
                    Learn More
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

