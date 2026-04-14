import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-foreground pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Trusted by 1,000+ homeowners
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-card sm:text-5xl lg:text-6xl">
            Quality Craftsmanship You Can Count On
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-card/80 sm:text-xl">
            From renovations to new builds, our licensed contractors deliver exceptional results
            on time and on budget. Serving the greater metro area for over 25 years.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" className="gap-2 text-base" asChild>
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-card/30 bg-transparent text-base text-card hover:bg-card/10 hover:text-card"
              asChild
            >
              <a href="tel:+15551234567">
                <Phone className="h-5 w-5" />
                (555) 123-4567
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-card/20 pt-8">
            <div>
              <div className="text-3xl font-bold text-card">25+</div>
              <div className="text-sm text-card/70">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-card/20" />
            <div>
              <div className="text-3xl font-bold text-card">500+</div>
              <div className="text-sm text-card/70">Projects Completed</div>
            </div>
            <div className="hidden h-12 w-px bg-card/20 sm:block" />
            <div className="hidden sm:block">
              <div className="text-3xl font-bold text-card">4.9</div>
              <div className="text-sm text-card/70">Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
