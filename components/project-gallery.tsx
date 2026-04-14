"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Kitchen Renovation",
    location: "Downtown Metro",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Bathroom Remodel",
    location: "Westside Heights",
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Full Home Exterior",
    location: "Riverside District",
    before: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
  },
]

export function ProjectGallery() {
  const [currentProject, setCurrentProject] = useState(0)
  const [showAfter, setShowAfter] = useState(true)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentProject]

  return (
    <section id="projects" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Before & After
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See the transformations we&apos;ve delivered for our clients.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-foreground shadow-xl">
            <div className="relative aspect-[16/10]">
              <img
                src={showAfter ? project.after : project.before}
                alt={`${project.title} ${showAfter ? "after" : "before"}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 sm:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-card sm:text-2xl">{project.title}</h3>
                    <p className="text-card/80">{project.location}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={!showAfter ? "default" : "secondary"}
                      size="sm"
                      onClick={() => setShowAfter(false)}
                    >
                      Before
                    </Button>
                    <Button
                      variant={showAfter ? "default" : "secondary"}
                      size="sm"
                      onClick={() => setShowAfter(true)}
                    >
                      After
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-lg transition-colors hover:bg-card"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-lg transition-colors hover:bg-card"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentProject ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
