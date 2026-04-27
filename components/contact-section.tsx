"use client"

import { useState } from "react"
import { ContactModal } from "./ContactModal"

export function ContactSection({
  variant = "light",
}: {
  variant?: "light" | "dark"
}) {
  const isDark = variant === "dark"
  const bg = isDark ? "bg-[#050505] text-white" : "bg-background text-foreground"
  const subText = isDark ? "text-white/50" : "text-muted-foreground"
  const line = isDark ? "border-white/15" : "border-border"
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="contact" data-scene className={`relative ${bg}`}>
      <div className="px-6 md:px-10 lg:px-14 pt-20 md:pt-28 pb-10">
        <p data-reveal className={`font-mono text-xs md:text-sm ${subText}`}>
          That&apos;s all for now.
        </p>
        <h2
          data-reveal
          data-reveal-delay="0.1"
          className="mt-3 text-balance text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]"
        >
          Got a project in mind?
          <br />
          Let&apos;s talk
        </h2>

        <div className="relative mt-20 md:mt-28">
          <div className={`border-t ${line}`} />
          {/* Blue CTA circle */}
          <button
            onClick={() => setIsModalOpen(true)}
            aria-label="Get in touch to open contact form"
            className="absolute -top-20 right-6 md:right-20 lg:right-28 flex h-40 w-40 md:h-44 md:w-44 items-center justify-center rounded-full bg-[#5851FF] text-white text-sm md:text-base font-medium shadow-[0_12px_40px_-8px_rgba(88,81,255,0.55)] transition-transform hover:scale-105"
          >
            Get in touch
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:max-w-xl">
          <div>
            <p className={`text-xs uppercase tracking-wide ${subText}`}>Email:</p>
            <p className="mt-1 text-sm md:text-base">malishakalsara4@gmail.com</p>
          </div>
          <div>
            <p className={`text-xs uppercase tracking-wide ${subText}`}>Phone</p>
            <p className="mt-1 text-sm md:text-base">(+94) 771315951</p>
          </div>
        </div>
      </div>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
