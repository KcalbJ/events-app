
import Link from "next/link";

import UserButton from "./UserButton";
import getSession from "@/lib/getSession";
import { Calendar } from "lucide-react";
import SignInButton from "./SignInButton";



export default async function Navbar() {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center font-bold bg-primary">
      <Link
        href="/"
        className="flex items-center justify-center gap-4 text-xl text-primary-foreground hover:underline underline-offset-4 "
        prefetch={false}
      >
        <Calendar className="size-6" />
        <span className="sr-only">Community Events</span>
        Eventually
      </Link>
      <nav className="ml-auto flex gap-4 text-primary-foreground sm:gap-6">
        <Link
          href="/events"
          className="text-m font-medium hover:underline underline-offset-4 "
          prefetch={false}
        >
          Events
        </Link>
        <Link
          href="/about"
          className="text-m font-medium hover:underline underline-offset-4 "
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-m font-medium hover:underline underline-offset-4 "
          prefetch={false}
        >
          Contact
        </Link>

       
      </nav>
      <div className="ml-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
      {user ? <UserButton  user={user} /> : <SignInButton/>}
      </div>
      
    </header>
  );
}

