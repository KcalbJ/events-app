import { Metadata } from "next";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import getSession from "@/lib/getSession";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;


  if(!user){
    redirect("/api/auth/signin?callbackUrl=/profile")
  }

  const eventOrder = await prisma.order.findMany({
    where: {
      buyerId: user.id,
    }
  })
  // if (user.id !== "admin"){
  //   return <main className="mx-auto scroll-my-10">
  //       <p>You are not authorised to access this page</p>
  //   </main>
  // }

  return (
    <main className="mx-auto my-10 space-y-3">
      <h1 className="text-center text-xl font-bold">Profile Page</h1>
      <div className="space-x-4 text-center mt-6">
      {eventOrder.map((event) => (
        <p key={event.id}>{event.totalAmount}</p>
      ))}
                </div>
    </main>
  );
}