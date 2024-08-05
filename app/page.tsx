
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Croissant, Dumbbell, Music, Palette, School, Users } from "lucide-react";
import UpcomingEvents from "@/components/UpcomingEvents";

export default async function Home() {

  return (
    <main className="flex-1">
        <section
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat opacity-95"
      style={{ backgroundImage: `url('/main.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-6 md:px-8 ">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Discover Upcoming Events</h1>
        <p className="mt-3 text-lg  sm:mt-5 sm:text-xl md:mt-6 md:text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Explore a wide range of exciting events happening in your city.
        </p>
        <div className="mt-8 sm:mt-10">
          <Link
            href="/events"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            prefetch={false}
          >
            Browse Events
          </Link>
        </div>
      </div>
    </section>
      <UpcomingEvents />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Popular Categories</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Events by Category</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through our most popular event categories to find something that interests you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <Link 
        href={{ pathname: '/events', query: { category: 'music' } }}
        passHref
      >
        <Card className="border-0 rounded-none shadow-none cursor-pointer">
          <CardContent className="p-0">
            <div className="bg-primary rounded-t-lg p-4 text-primary-foreground">
              <Music className="w-8 h-8" />
            </div>
            <div className="p-4">
              <div className="text-lg font-medium">Music</div>
              <p className="text-sm text-muted-foreground">Concerts, open mics, and music workshops.</p>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link 
        href={{ pathname: '/events', query: { category: 'sports' } }}
        passHref
      >
        <Card className="border-0 rounded-none shadow-none cursor-pointer">
          <CardContent className="p-0">
          <div className="bg-primary rounded-t-lg p-4 text-accent-foreground">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
            <div className="p-4">
              <div className="text-lg font-medium">Sports</div>
              <p className="text-sm text-muted-foreground">Recreational sports, fitness classes, and tournaments.</p>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link 
        href={{ pathname: '/events', query: { category: 'art' } }}
        passHref
      >
        <Card className="border-0 rounded-none shadow-none cursor-pointer">
          <CardContent className="p-0">
          <div className="bg-primary rounded-t-lg p-4 text-accent-foreground">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <div className="p-4">
              <div className="text-lg font-medium">Art</div>
              <p className="text-sm text-muted-foreground">Exhibitions, workshops, and art-related events.</p>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link 
        href={{ pathname: '/events', query: { category: 'food' } }}
        passHref
      >
        <Card className="border-0 rounded-none shadow-none cursor-pointer">
          <CardContent className="p-0">
            <div className="bg-primary rounded-t-lg p-4 text-accent-foreground">
              <Croissant className="w-8 h-8 text-white" />
            </div>
            <div className="p-4">
              <div className="text-lg font-medium">Food</div>
              <p className="text-sm text-muted-foreground">Cooking classes, food festivals, and culinary events.</p>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link 
        href={{ pathname: '/events', query: { category: 'education' } }}
        passHref
      >
        <Card className="border-0 rounded-none shadow-none cursor-pointer">
          <CardContent className="p-0">
          <div className="bg-primary rounded-t-lg p-4 text-accent-foreground">
              <School className="w-8 h-8 text-white" />
            </div>
            <div className="p-4">
              <div className="text-lg font-medium">Education</div>
              <p className="text-sm text-muted-foreground">Workshops, lectures, and skill-building classes.</p>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link 
        href={{ pathname: '/events', query: { category: 'community' } }}
        passHref
      >
        <Card className="border-0 rounded-none shadow-none cursor-pointer">
          <CardContent className="p-0">
          <div className="bg-primary rounded-t-lg p-4 text-accent-foreground">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="p-4">
              <div className="text-lg font-medium">Community</div>
              <p className="text-sm text-muted-foreground">Neighborhood gatherings, volunteer events, and social activities.</p>
            </div>
          </CardContent>
        </Card>
      </Link>
            </div>
          </div>
        </section>
      </main>
  );
}
