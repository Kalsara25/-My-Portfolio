"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

type Project = {
  title: string
  image: string
  alt: string
}

const projects: Project[] = [
  {
    title: "Movie Reservation System",
    image: "/project-movie.jpg",
    alt: "Screenshot of Java IDE with a movie reservation booking system project open",
  },
  {
    title: "One Piece 3D Web Site",
    image: "/project-onepiece.jpg",
    alt: "Dark themed One Piece 3D landing page saying Set Sail For Adventure",
  },
  {
    title: "Goldstone - RDR2 - RP - Guide",
    image: "/project-goldstone.jpg",
    alt: "Goldstone Frontier Guide dashboard with dark UI and AI chat assistant",
  },
  {
    title: "Zyqron Company",
    image: "/project-zyqron.jpg",
    alt: "Zyqron brand identity page with minimalist Z logo on light background",
  },
]

export function WorksSection() {
  return (
    <section
      id="projects"
      data-scene
      className="px-6 md:px-10 lg:px-14 pb-24 scroll-mt-10"
    >
      <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12 md:gap-10 mb-10 md:mb-14">
        <h2
          data-reveal
          className="md:col-span-7 text-balance text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight"
        >
          Impressive Works
        </h2>
        <p
          data-reveal
          data-reveal-delay="0.1"
          className="md:col-span-4 md:col-start-9 text-xs md:text-sm uppercase tracking-wide leading-relaxed text-muted-foreground"
        >
          Here&apos;s a selection of projects that showcase my passion for
          design and development, reflecting creativity and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-14">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            className="group"
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: (idx % 2) * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                src={p.image || "/placeholder.svg"}
                alt={p.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/30">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
              <h3 className="text-base md:text-lg font-medium">{p.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm shadow-sm transition-colors hover:bg-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          Explore more
        </button>
      </div>
    </section>
  )
}
