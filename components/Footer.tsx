import Link from "next/link"
function Footer() {
  return (
    <footer className="border-t w-screen">
    <div className="container grid items-start gap-4 px-4 py-4 text-sm md:grid-cols-2 md:justify-between md:py-6 lg:gap-10 lg:px-6">
      <div className="text-center md:text-left">
        <Link className="font-bold" href="#">
          BEANLY INC
        </Link>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Beast Beans. Always.</p>
      </div>
      <nav className="flex flex-col gap-2 md:flex-row md:ml-auto lg:gap-4 xl:gap-2">
        <Link className="underline underline-offset-4" href="/">
          Home
        </Link>
        <Link className="underline underline-offset-4" href="/">
          Contact Us
        </Link>
        <Link className="underline underline-offset-4" href="/">
          Terms & Conditions
        </Link>
        <Link className="underline underline-offset-4" href="/">
          Privacy Policy
        </Link>
      </nav>
    </div>
  </footer>
  )
}

export default Footer