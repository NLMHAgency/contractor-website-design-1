import { Shield, Award, Clock, Star } from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full coverage protection",
  },
  {
    icon: Award,
    title: "A+ BBB Rating",
    description: "Accredited business",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "We respect your schedule",
  },
  {
    icon: Star,
    title: "5-Year Warranty",
    description: "Quality guaranteed",
  },
]

export function TrustBar() {
  return (
    <section className="border-b border-border bg-card py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
