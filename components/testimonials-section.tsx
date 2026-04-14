import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    content:
      "Summit Builders transformed our outdated kitchen into a modern masterpiece. The team was professional, clean, and finished ahead of schedule. Couldn't be happier!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    content:
      "We've used Summit for multiple renovation projects across our properties. Their attention to detail and reliability is unmatched. They're now our go-to contractor.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Jennifer Brooks",
    role: "Homeowner",
    content:
      "From the initial estimate to project completion, everything was transparent and professional. The roofing team did an incredible job, and the warranty gives us peace of mind.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "David Thompson",
    role: "Business Owner",
    content:
      "They completed our office renovation with minimal disruption to our business. The quality of work exceeded our expectations, and the project came in under budget.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what homeowners are saying.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-border bg-card">
              <CardContent className="p-6">
                <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
