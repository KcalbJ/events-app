
import { Button } from "@/components/ui/button"

import { Calendar, Clock, MapPinned, TicketIcon } from "lucide-react"
import prisma from "@/lib/prisma"


export default async function Page({params}) {
  const event = await prisma.event.findUnique({
    where: {
      id: params.eventId,
    }
  })
  return (
    <div className="bg-background text-foreground min-h-dvh flex flex-col">
      <main className="flex-1 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <h1 className="text-3xl font-bold">{event.name}</h1>
         
        </div>
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold">Event Details</h2>
                  <div className="text-muted-foreground mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>June 1, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-5 h-5" />
                      <span>{new Date(event.startDateTime).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPinned className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">About the Event</h2>
                  <p className="text-muted-foreground mt-2">
                    {event.description}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Pricing</h2>
                  <div className="text-muted-foreground mt-2">
                    <div className="flex items-center gap-2">
                      <TicketIcon className="w-5 h-5" />
                      <span>Price: {event.price}</span>
                    </div>
                   
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Sign Up</h2>
                  <form className="mt-4 space-y-4">
                    <Button type="submit" className="w-full">
                      Sign Up
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <img
                src={event.imgUrl}
                width={800}
                height={600}
                alt="Event Image"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}