"use server"

import prisma from "@/lib/prisma";

export async function fetchEvents(category) {
  const events = await prisma.event.findMany({
    where: category ? { category } : {},
    orderBy: {
      startDateTime: "asc", 
    },
  });
  return events;
}