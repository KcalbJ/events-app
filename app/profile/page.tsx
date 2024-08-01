import { Metadata } from "next";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";
import AddToCalendarButton from "@/components/AddToCalanderButton";


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
    <main className="mx-auto my-10 space-y-3">
      <h1 className="text-center text-xl font-bold">Profile Page</h1>
      <div className="space-x-4 text-center mt-6">
        {ordersWithEvents.map((orderWithEvent) => (
          <div key={orderWithEvent.id}>
            <p>Order Total Amount: {orderWithEvent.totalAmount}</p>
            <p>Event Name: {orderWithEvent.event?.name}</p>
            <AddToCalendarButton orderWithEvent={orderWithEvent} />
          </div>
        ))}
      </div>
    </main>
  );
}