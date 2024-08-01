import { Metadata } from "next";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";
import AddToCalendarButton from "@/components/AddToCalanderButton";
import { Card } from "@/components/ui/card"

import Link from "next/link";
import { formatDateTime } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Profile",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }

  const orders = await prisma.order.findMany({
    where: {
      buyerId: user.id,
    },
  });

  const ordersWithEvents = await Promise.all(
    orders.map(async (order) => {
      const event = await prisma.event.findUnique({
        where: {
          id: order.eventId,
        },
      });
      return { ...order, event };
    })
  );

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ordersWithEvents.map((orderWithEvent) => (
          <Card className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
            <div className="flex flex-col gap-4">
              <div>
              <h2 className="text-lg font-semibold">{orderWithEvent.event.name}</h2>
              <p className="text-muted-foreground">
                {formatDateTime(orderWithEvent.event.startDateTime)} - {formatDateTime(orderWithEvent.event.endDateTime)}
              </p>
              </div>
              <Link href={`/events/${orderWithEvent.event.id}`} className="text-primary hover:underline" prefetch={false}>
                View Details
                </Link>
                <AddToCalendarButton orderWithEvent={orderWithEvent} />
            </div>
          </Card>
        ))}
        </div>
      </main>
    </div>
  );
}
