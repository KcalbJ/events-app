import Link from "next/link"


export default function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-primary lg:block">
        <div className="flex h-full items-center justify-center">
          <div className="max-w-md space-y-6 text-center text-primary-foreground">
            <h1 className="text-4xl font-bold tracking-tight">Welcome to Acme Events</h1>
            <p className="text-lg">
              Discover and attend the best events in your city. Join our vibrant community today.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 items-center justify-center bg-background lg:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-6 px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Sign in to your account</h2>
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href="#" className="font-medium underline" prefetch={false}>
                Sign up
              </Link>
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="name@example.com" required />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" required />
            </div>
            <button type="submit" className="w-full">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}