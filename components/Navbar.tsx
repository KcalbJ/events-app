import { signIn } from "@/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import getSession from "@/lib/getSession";
import { Calendar } from "lucide-react";

export default async function Navbar() {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Calendar className="size-6" />
        <span className="sr-only">Community Events</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Upcoming
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Categories
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>

       
      </nav>
      <div className="ml-4">
      {user ? <UserButton  user={user} /> : <SignInButton />}
      </div>
      
    </header>
  );
}

function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}
