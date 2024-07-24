
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Croissant, Dumbbell, Music, Palette, School, Users } from "lucide-react";

export default async function Home() {

  return (
    <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16 ">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Discover Upcoming Community Events
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find and attend local events, classes, and activities in your community.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    href="/events"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Upcoming Events
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start py-6 space-y-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-start sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
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
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Event"
                    className="object-cover aspect-video "
                  />
                </CardContent>
                <CardFooter className="grid gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium">Community Cleanup Day</div>
                    <div className="text-sm text-muted-foreground">June 10, 2023</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Riverside Park</div>
                    <div className="text-sm text-muted-foreground">10:00 AM - 2:00 PM</div>
                  </div>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Event"
                    className="object-cover aspect-video"
                  />
                </CardContent>
                <CardFooter className="grid gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium">Cooking Class: Healthy Meals</div>
                    <div className="text-sm text-muted-foreground">July 15, 2023</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Community Center</div>
                    <div className="text-sm text-muted-foreground">6:30 PM - 8:30 PM</div>
                  </div>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Event"
                    className="object-cover aspect-video"
                  />
                </CardContent>
                <CardFooter className="grid gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium">Outdoor Movie Night</div>
                    <div className="text-sm text-muted-foreground">August 5, 2023</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Town Square</div>
                    <div className="text-sm text-muted-foreground">8:00 PM - 11:00 PM</div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
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
              <Card className="border-0 rounded-none shadow-none">
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
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <div className="bg-secondary rounded-t-lg p-4 text-secondary-foreground">
                    <Dumbbell className="w-8 h-8" />
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-medium">Sports</div>
                    <p className="text-sm text-muted-foreground">
                      Recreational sports, fitness classes, and tournaments.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <div className="bg-accent rounded-t-lg p-4 text-accent-foreground">
                    <Palette className="w-8 h-8" />
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-medium">Art</div>
                    <p className="text-sm text-muted-foreground">Exhibitions, workshops, and art-related events.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <div className="bg-muted rounded-t-lg p-4 text-muted-foreground">
                    <Croissant className="w-8 h-8" />
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-medium">Food</div>
                    <p className="text-sm text-muted-foreground">
                      Cooking classes, food festivals, and culinary events.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <div className="bg-success rounded-t-lg p-4 text-success-foreground">
                    <School className="w-8 h-8" />
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-medium">Education</div>
                    <p className="text-sm text-muted-foreground">Workshops, lectures, and skill-building classes.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <div className="bg-warning rounded-t-lg p-4 text-warning-foreground">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-medium">Community</div>
                    <p className="text-sm text-muted-foreground">
                      Neighborhood gatherings, volunteer events, and social activities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
  );
}
