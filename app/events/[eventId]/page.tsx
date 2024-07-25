
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Calendar, Clock, MapPinned, TicketIcon } from "lucide-react"
import prisma from "@/lib/prisma"
export default async function Page({params}) {
  const event = prisma.event.findUnique({
    where: {
      id: params.id    },
  })
  return (
    <div className="bg-background text-foreground min-h-dvh flex flex-col">
      <main className="flex-1 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <h1 className="text-3xl font-bold">Annual Tech Conference</h1>
          <Button variant="outline">Sign Up</Button>
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
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPinned className="w-5 h-5" />
                      <span>123 SESAME</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">About the Event</h2>
                  <p className="text-muted-foreground mt-2">
                    Join us for our annual tech conference, where industry leaders and innovators come together to share
                    their insights and experiences. This year's event will feature a wide range of talks, workshops, and
                    networking opportunities, all designed to inspire and empower attendees.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Pricing</h2>
                  <div className="text-muted-foreground mt-2">
                    <div className="flex items-center gap-2">
                      <TicketIcon className="w-5 h-5" />
                      <span>Early Bird Ticket: 99</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <TicketIcon className="w-5 h-5" />
                      <span>Regular Ticket: 149</span>
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
                src="/placeholder.svg"
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