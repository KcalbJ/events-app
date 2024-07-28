"use server";

import { auth } from "@/auth";
import { CreateEventValues, createEventSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";


export async function updateEvent(values: CreateEventValues, eventId) {
  const session = await auth();
  const userId = session?.user.id;
  const user = session?.user;
  if (user.role !== "admin") {
    throw Error("Unauthariized");
  }
  const {
    name,
    description,
    startDateTime,
    endDateTime,
    location,
    category,
    price,
    isFree,
    imgUrl,
  } = createEventSchema.parse(values);
 console.log(values)
  
    
    await prisma.event.update({
        where: {
            id: eventId,
          },
      data: {
        name,
        description,
        startDateTime,
        endDateTime,
        location,
        category,
        price,
        isFree,
        imgUrl,
        userId,
      },
    });
    revalidatePath("/events");
}
