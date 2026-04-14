import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { ServicesSection } from "@/components/services-section"
import { ProjectGallery } from "@/components/project-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HowItWorks } from "@/components/how-it-works"
import { ServiceAreas } from "@/components/service-areas"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProjectGallery />
      <TestimonialsSection />
      <HowItWorks />
      <ServiceAreas />
      <ContactSection />
      <Footer />
    </main>
  )
}
