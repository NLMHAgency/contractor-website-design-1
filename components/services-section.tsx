import { Card, CardContent } from "@/components/ui/card"
import { Home, Wrench, Zap, Droplets, PaintBucket, HardHat, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Home Renovations",
    description: "Complete home remodeling from kitchens to bathrooms. Transform your space with our expert craftsmen.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: HardHat,
    title: "Roofing",
    description: "New installations, repairs, and inspections. Protect your home with quality roofing solutions.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Licensed electricians for all your wiring, panel upgrades, and electrical needs.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "From leak repairs to complete bathroom plumbing. Fast, reliable service guaranteed.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Interior Finishing",
    description: "Drywall, painting, trim work, and flooring. Perfect finishing touches for every project.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "General Repairs",
    description: "No job too small. We handle all maintenance and repair needs for your home.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive contracting solutions for every project, big or small.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
