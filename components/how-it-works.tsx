import { Phone, ClipboardList, Hammer } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Request a Quote",
    description:
      "Call us or fill out our form. We'll schedule a free consultation at your convenience.",
  },
  {
    number: "2",
    icon: ClipboardList,
    title: "Get Your Plan",
    description:
      "We'll assess your project, provide a detailed estimate, and create a timeline that works for you.",
  },
  {
    number: "3",
    icon: Hammer,
    title: "We Build It",
    description:
      "Our expert team gets to work, keeping you informed every step of the way until completion.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-foreground py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-card sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-card/70">
            Getting started is easy. Here&apos;s our simple 3-step process.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-px w-full bg-card/20 md:block" />
              )}
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/20" />
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-card text-lg font-bold text-foreground">
                  {step.number}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-card/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
