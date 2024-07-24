
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y h-screen">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Our Events</div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Evntualy: Bringing the Best Events to You
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  At Evntualy, we are dedicated to hosting exceptional events that bring together industry leaders,
                  innovators, and passionate individuals. Our events are designed to inspire, educate, and foster
                  meaningful connections within the software development community.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  width="200"
                  height="200"
                  alt="Acme Inc Events"
                  className="w-full max-w-[400px]"
                />
              </div>
            </div>
          </div>
        </section>
       
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet the Events Team</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The dedicated individuals who make our events a success.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center space-y-1">
                  <h3 className="text-lg font-bold">Sarah Johnson</h3>
                  <p className="text-muted-foreground">Events Manager</p>
                  <p className="text-sm text-muted-foreground">
                    Sarah is a seasoned events professional with a passion for creating unforgettable experiences. She
                    leads the Acme Inc events team, ensuring every detail is meticulously planned and executed.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="text-center space-y-1">
                  <h3 className="text-lg font-bold">Michael Kain</h3>
                  <p className="text-muted-foreground">Events Coordinator</p>
                  <p className="text-sm text-muted-foreground">
                    Michael is a skilled event coordinator with a keen eye for detail. He works closely with the team to
                    ensure every event runs smoothly, from logistics to entertainment.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>KS</AvatarFallback>
                </Avatar>
                <div className="text-center space-y-1">
                  <h3 className="text-lg font-bold">Emily Thompson</h3>
                  <p className="text-muted-foreground">Events Marketing</p>
                  <p className="text-sm text-muted-foreground">
                    Emily is a talented events marketer who ensures our events reach the right audience. She develops
                    engaging campaigns and leverages her network to promote our events and drive attendance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
