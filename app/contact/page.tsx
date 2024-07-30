import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPinned, Phone } from "lucide-react"
export default function Page() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="space-y-6">
          
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground">Get in touch with our team for any inquiries or support.</p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPinned className="mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">123 Main St, Anytown USA 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">(0123) 456-789</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">info@events-app.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Fill out the form below and well get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
