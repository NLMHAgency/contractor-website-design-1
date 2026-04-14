import { MapPin } from "lucide-react"

const areas = [
  "Downtown Metro",
  "Westside Heights",
  "Riverside District",
  "North Valley",
  "East Bay",
  "South Shore",
  "Hillcrest",
  "Lakewood",
  "Oakville",
  "Maplewood",
  "Cedar Park",
  "Pine Grove",
]

export function ServiceAreas() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Serving the Greater Metro Area
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We proudly serve homeowners and businesses throughout the region. If you&apos;re in our
              service area, we&apos;ll be there.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Don&apos;t see your area? Give us a call — we may still be able to help!
            </p>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop"
              alt="Metro area skyline"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-lg bg-card/95 px-4 py-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">50+ Mile Radius</div>
                  <div className="text-sm text-muted-foreground">Full service coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
