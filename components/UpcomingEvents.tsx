"use server";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Card, CardContent, CardFooter } from "./ui/card";
import { formatDateTime, formatDate, formatTime } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";

export default async function UpcomingEvents() {
  const events = await prisma.event.findMany({
    where: {
      startDateTime: {
        gte: new Date(), // Fetch events that are upcoming
      },
    },
    orderBy: {
      startDateTime: "asc", // Order by date ascending
    },
    take: 3, // Limit to 3 events
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Featured Events
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Upcoming Community Events
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the most popular upcoming events in your area.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="w-full max-w-md rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={event.imgUrl}
                  alt={event.name}
                  width="400"
                  height="200"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/200", objectFit: "cover" }}
                />
              </div>
              <div className="p-6 bg-background">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xl font-semibold">{event.name}</div>
                  <div className="bg-muted px-3 py-1 rounded-full text-xs font-medium text-muted-foreground">
                    £{event.price}
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {formatDate(event.startDateTime)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {formatTime(event.startDateTime)}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {event.description}
                </p>
                <Link
                  href={`/events/${event.id}`}
                  className="h-9 px-4 rounded-md text-center align-center justify-center bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
