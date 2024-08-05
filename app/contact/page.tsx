import Link from "next/link"
export default function Page() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a question or need help? Dont hesitate to reach out.
        </p>
      </div>
      <div className="bg-card rounded-lg shadow-lg p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <a href="#" className="text-primary hover:underline">
              support@eventapp.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <a href="#" className="text-primary hover:underline">
              +44 (777) 777-7777
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                Twitter
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                Facebook
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                Instagram
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-muted-foreground">123 App Street, Anytown UK 12345</p>
          </div>
        </div>
      </div>
    </div>
  </main>
)
}
