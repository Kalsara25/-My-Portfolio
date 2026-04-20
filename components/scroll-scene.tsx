"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

/**
 * ScrollScene
 * -----------
 * Provides an "immersive camera" feel as the user scrolls:
 *
 *  1. The whole document is placed inside a CSS `perspective` stage, so any
 *     3D transforms we animate on children read as depth rather than skew.
 *  2. Each [data-reveal] element fades + slides + tilts into place the first
 *     time it enters the viewport.
 *  3. The hero portrait, the huge background marquee, and each major section
 *     are driven by scroll-linked timelines so the page feels like a sculpted
 *     3D space the viewer is moving through.
 *  4. Smooth in-page anchor scrolling for the dock links (#about, #projects,
 *     #explore).
 *
 * All logic is client-only and respects `prefers-reduced-motion`.
 */
export function ScrollScene({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    // Document-level listeners / async handles that live outside gsap.context
    // and therefore need their own cleanup below.
    let onClick: ((e: Event) => void) | null = null
    let refresh: (() => void) | null = null

    const ctx = gsap.context(() => {
      // ---------- 1. Entry reveal for every [data-reveal] element ----------
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]")
      reveals.forEach((el) => {
        const delay = Number(el.dataset.revealDelay ?? 0)
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 60,
            rotateX: 8,
            scale: 0.98,
            transformPerspective: 1200,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1.1,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // NOTE: Hero-specific camera, portrait zoom and background-marquee parallax
      // are now owned by Framer Motion inside <HeroSection />. GSAP only handles
      // reveals, non-hero section tilts, and smooth anchor scrolling here.

      // ---------- 2. Section-level "camera" transitions ----------
      const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]")
      scenes.forEach((scene) => {
        gsap.fromTo(
          scene,
          {
            rotateX: 6,
            y: 80,
            opacity: 0.6,
            transformPerspective: 1400,
            transformOrigin: "50% 100%",
          },
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 95%",
              end: "top 45%",
              scrub: 0.6,
            },
          },
        )
      })

      // ---------- 5. Smooth anchor scroll for dock / in-page links ----------
      onClick = (e: Event) => {
        const target = e.target as HTMLElement | null
        const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
        if (!link) return
        const href = link.getAttribute("href")
        if (!href || href === "#") return
        const el = document.querySelector(href)
        if (!el) return
        e.preventDefault()
        gsap.to(window, {
          duration: 1.2,
          ease: "power3.inOut",
          scrollTo: { y: el as Element, offsetY: 0 },
        })
      }
      document.addEventListener("click", onClick)

      // Refresh after fonts/images settle to avoid off-by-a-few-px triggers.
      refresh = () => ScrollTrigger.refresh()
      window.addEventListener("load", refresh)
    }, rootRef)

    return () => {
      if (onClick) document.removeEventListener("click", onClick)
      if (refresh) window.removeEventListener("load", refresh)
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      style={{ perspective: "1600px", perspectiveOrigin: "50% 35%" }}
      className="[&_[data-scene]]:transform-gpu"
    >
      {children}
    </div>
  )
}
