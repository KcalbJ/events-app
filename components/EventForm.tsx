'use client'
import { useActionState, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { createEvent } from "@/app/settings/actions";


export default function EventForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  // const [error, action, isPending] = useActionState(createEvent, null)
  return (
    <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Create New Event</CardTitle>
        <CardDescription>Fill out the details for your upcoming event.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createEvent} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Event Name
              </Label>
              <Input id="name" placeholder="Summer Picnic" name="name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="date" className="text-sm font-medium">
                  Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {selectedDate ? selectedDate.toDateString() : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
                  </PopoverContent>
                </Popover>
                <input type="hidden" name="date" value={selectedDate ? selectedDate.toISOString() : ''} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time" className="text-sm font-medium">
                  Time
                </Label>
                <Input id="time" type="time" name="time" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location
              </Label>
              <Input id="location" name="location" placeholder="123 Fleet street, Anytown GB" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Description
              </Label>
              <Textarea id="description" rows={5} placeholder="Describe your event..." name="description" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category" className="text-sm font-medium">
                Category
              </Label>
              <Select name="category">
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price" className="text-sm font-medium">
                Price
              </Label>
              <Input id="price" placeholder="100.00" name="price" type="number" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="image" className="text-sm font-medium">
                Event Image
              </Label>
              <Input id="imgUrl" placeholder="https://example.com/image.jpg" name="imgUrl" />
            </div>
          </div>
          <CardFooter>
            <div className="flex justify-end">
              <Button  type="submit">Create Event</Button>
            </div>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}

