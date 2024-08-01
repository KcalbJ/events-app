'use client'

import React from "react";
import { Button } from "@/components/ui/button";

const AddToCalendarButton = ({ orderWithEvent }) => {
  const handleAddToCalendar = async () => {
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
      alert("Event added to calendar!");
    } else {
      alert("Failed to add event to calendar.");
    }
  };

  return (
    <Button
      size="lg"
      className="button col-span-2 w-full"
      onClick={handleAddToCalendar}
    >
      Add to calendar
    </Button>
  );
};

export default AddToCalendarButton;