'use client'

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";


const AddToCalendarButton = ({ orderWithEvent }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const handleAddToCalendar = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/addToCalendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: orderWithEvent.event.name,
          location: orderWithEvent.event.location,
          description: orderWithEvent.event.description,
          startDateTime: orderWithEvent.event.startDateTime,
          endDateTime: orderWithEvent.event.endDateTime,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Event added to calendar!",
        });
      } else {
        toast({
          variant: "destructive",
          description: "An error occurred. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      size="lg"
      className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      onClick={handleAddToCalendar}
      disabled={isLoading}
    >
      {isLoading ? "Adding..." : "Add to calendar"}
    </Button>
  );
};


export default AddToCalendarButton;