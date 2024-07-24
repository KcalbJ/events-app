'use client'
import { useState } from 'react';
import { redirect } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { format } from "date-fns"

export default function EventForm() {
  const [formData, setFormData] = useState({
    name: '',
    date:'',
    time: '',
    location: '',
    description: '',
    category: '',
    imgUrl: '',
    price: '',
  });
 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleCategoryChange = (value) => {
    setFormData({ ...formData, category: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date: date }); 
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/events/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        date: new Date(formData.date).toISOString(), 
      }),
    });
    if (response.ok) {
      redirect('/events'); 
    } else {
      console.error('Failed to create event');
    }
  };

  return (
    <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Create New Event</CardTitle>
        <CardDescription>Fill out the details for your upcoming event.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Event Name
              </Label>
              <Input id="name" placeholder="Summer Picnic" value={formData.name} onChange={handleInputChange} />
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
                      {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                  <Calendar 
                      mode="single"
                      selected={formData.date ? new Date(formData.date) : undefined}
                      onSelect={handleDateChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time" className="text-sm font-medium">
                  Time
                </Label>
                <Input id="time" type="time" value={formData.time} onChange={handleInputChange} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location
              </Label>
              <Input id="location" placeholder="123 Fleet street, Anytown GB" value={formData.location} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Description
              </Label>
              <Textarea id="description" rows={5} placeholder="Describe your event..." value={formData.description} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category" className="text-sm font-medium">
                Category
              </Label>
              <Select value={formData.category} onValueChange={handleCategoryChange}>
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
              <Input id="price" placeholder="100.00" value={formData.price} onChange={handleInputChange} />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="image" className="text-sm font-medium">
                Event Image
              </Label>
              <Input id="imgUrl" placeholder="https://example.com/image.jpg" value={formData.imgUrl} onChange={handleInputChange} />
            </div>
          </div>
          <CardFooter>
            <div className="flex justify-end">
              <Button type="submit">Create Event</Button>
            </div>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
