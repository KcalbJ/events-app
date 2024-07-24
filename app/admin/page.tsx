import { Metadata } from "next";
import { redirect } from "next/navigation";

import getSession from "@/lib/getSession";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Admin",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;
  if(!user){
    redirect("/api/auth/signin?callbackUrl=/admin")
  }
  if (user.role !== "admin"){
    return <main className="mx-auto scroll-my-10">
        <p>You are not authorised to access this page</p>
    </main>
  }

  return (
    <main className="mx-auto my-10 space-y-3">
      <h1 className="text-center text-xl font-bold">Admin Page</h1>
      <div className="space-x-4 text-center mt-6">
                  <Link
                    href="/events/create"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Create Event
                  </Link>
                </div>
    </main>
  );
}