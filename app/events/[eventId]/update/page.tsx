import { Metadata } from "next";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma"

import getSession from "@/lib/getSession";
import EventForm from "@/components/EventForm";
export const metadata: Metadata = {
  title: "Edit event",
};




export default async function Page({params}) {
  const session = await getSession();
  const user = session?.user;
  if(!user){
    redirect("/api/auth/signin?callbackUrl=/events/create")
  }
  if (user.role !== "admin"){
    return <main className="mx-auto scroll-my-10">
        <p>You are not authorised to access this page</p>
    </main>
  }

  const event = await prisma.event.findUnique({
    where: {
      id: params.eventId,
    }
  })

  return (
    <main className="mx-auto my-10 space-y-3">
      <EventForm type="Update" event={event} eventId={event.id}/>  
     </main>
  );
}