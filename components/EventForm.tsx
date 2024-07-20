import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function EventForm() {
  return (
    <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Create New Event</CardTitle>
        <CardDescription>Fill out the details for your upcoming event.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="event-name" className="text-sm font-medium">
                Event Name
              </Label>
              <Input id="event-name" placeholder="Summer Picnic" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="event-date" className="text-sm font-medium">
                  Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                    <CalendarDays className="mr-2 h-4 w-4" />
                      Pick a date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-time" className="text-sm font-medium">
                  Time
                </Label>
                <Input id="event-time" type="time" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-location" className="text-sm font-medium">
                Location
              </Label>
              <Input id="event-location" placeholder="123 Fleet street, Anytown GB" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-description" className="text-sm font-medium">
                Description
              </Label>
              <Textarea id="event-description" rows={5} placeholder="Describe your event..." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-category" className="text-sm font-medium">
                Category
              </Label>
              <Select id="event-category">
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="educational">Educational</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="fundraising">Fundraising</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="event-image" className="text-sm font-medium">
                Event Image
              </Label>
              <Input id="event-image" type="file" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end">
          <Button>Create Event</Button>
        </div>
      </CardFooter>
    </Card>
  )
}