"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SiteHeader } from "./site-header"
import { FloatingDock } from "./floating-dock"
import { MarqueeText } from "./marquee-text"
import Image from "next/image"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Perspective transforms
  const heroRotateX = useTransform(scrollYProgress, [0, 1], [0, 14])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full overflow-hidden bg-[#0a0a0a]"
      style={{
        perspective: "1600px",
        perspectiveOrigin: "50% 35%",
      }}
    >
      <motion.div
        style={{
          rotateX: heroRotateX,
          scale: heroScale,
          opacity: heroOpacity,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full min-h-screen flex flex-col"
      >
        {/* Layer 0: Background Panels */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} 
          />
        </div>

        {/* Layer 10: Site Header */}
        <div className="relative z-10 w-full">
          <h1 className="sr-only">Kalsara Maleesha - AI Engineer, Creative Developer & UX Designer</h1>
          <SiteHeader variant="dark" />
        </div>

        {/* Layer 10: Your Portrait */}
        <div className="relative flex-1 flex items-end justify-center overflow-visible h-full w-full">
          <motion.div
            style={{ y: portraitY }}
            className="relative z-10 h-[85vh] w-full max-w-3xl flex justify-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <Image
              src="/hero-portrait.jpg"
              alt="Kalsara Maleesha"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-contain object-bottom"
            />
          </motion.div>

          {/* Layer 20: The BIG WHITE MARQUEE */}
          <div
            className="absolute z-20 pointer-events-none select-none w-full"
            style={{
              // 130px down 85px 
              bottom: "85px", 
              left: 0, 
              right: 0,
            }}
          >
            <MarqueeText
              text="AI Engineer & Creative Developer"
              size="clamp(100px, 16vw, 240px)"
              className="text-white font-black opacity-100 mix-blend-normal"
              duration={25}
            />
          </div>

          {/* Layer 30: Floating Dock */}
          <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 md:bottom-10 h-[60px]">
            <FloatingDock />
          </div>
        </div>
      </motion.div>
    </section>
  )
}