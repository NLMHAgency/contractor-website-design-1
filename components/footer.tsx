import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const services = [
  "Home Renovations",
  "Roofing",
  "Electrical",
  "Plumbing",
  "Interior Finishing",
  "General Repairs",
]

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-lg font-bold text-card">Summit Builders</span>
            </Link>
            <p className="mt-4 text-sm text-card/70">
              Quality craftsmanship and reliable service for over 25 years. Licensed, insured, and
              committed to excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-card">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-card/70 transition-colors hover:text-card"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/70 transition-colors hover:text-card"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+15551234567" className="text-sm text-card/70 hover:text-card">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@summitbuilders.com"
                  className="text-sm text-card/70 hover:text-card"
                >
                  info@summitbuilders.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-card/70">
                  123 Builder Lane, Suite 100
                  <br />
                  Metro City, ST 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-card/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-card/50">
              &copy; {new Date().getFullYear()} Summit Builders. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-card/50 hover:text-card/70">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-card/50 hover:text-card/70">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
