
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import prisma from "@/lib/prisma"


export default async function Page() {
 
  
  const events  = await prisma.event.findMany();
  
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="bg-primary py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Discover Upcoming Events
            </h1>
            <p className="text-primary-foreground/80 md:text-lg">
              Explore a wide range of events and find the perfect one for you.
            </p>
          </div>
        </div>
      </section>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 p-4 md:p-6">
        <div className="bg-background rounded-lg shadow-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="music">
              <AccordionTrigger className="text-base">Music</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-music-concerts" /> Concerts
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-music-festivals" /> Festivals
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-music-workshops" /> Workshops
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="arts">
              <AccordionTrigger className="text-base">Arts</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-arts-exhibitions" /> Exhibitions
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-arts-performances" /> Performances
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-arts-workshops" /> Workshops
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sports">
              <AccordionTrigger className="text-base">Sports</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-sports-games" /> Games
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-sports-tournaments" /> Tournaments
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-sports-clinics" /> Clinics
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tech">
              <AccordionTrigger className="text-base">Tech</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-tech-conferences" /> Conferences
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-tech-meetups" /> Meetups
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-tech-workshops" /> Workshops
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <img
                  src={event.imgUrl || "/placeholder.svg"}
                  alt={event.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{event.name}</h3>
                  <p className="text-muted-foreground">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-muted-foreground">{event.location}</p>
                  <p className="text-muted-foreground">£{event.price ? event.price : " free"}</p>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                     >
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            ))
}
        </div>
      </main>
    </div>
  );
}