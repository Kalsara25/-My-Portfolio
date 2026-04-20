"use client"

import { Home, Terminal, Instagram, Linkedin, Github, Compass } from "lucide-react"

// Define the type for each navigation item
type DockItem = {
  icon: any          // Can be a Lucide component or a string path for images
  label: string      // Tooltip/Aria label text
  href: string       // Target URL or section ID
  external?: boolean // Open in a new tab if true
  highlight?: boolean// Special styling for prominent items (e.g., About)
}

const items: DockItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Terminal, label: "Projects", href: "#projects" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/kalsaramaleesha?igsh=cjdnODFsbm52Mnpr",
    external: true,
  },
  // Ensure the image path is a string in quotes
  { icon: "/goost.jpg", label: "About", href: "#about", highlight: true },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kalsara-maleesha",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Kalsara25",
    external: true,
  },
  { icon: Compass, label: "Explore", href: "#explore" },
]

/**
 * Liquid-glass floating dock.
 * A fixed-position navigation bar with glassmorphism effects.
 */
export function FloatingDock({ className = "" }: { className?: string }) {
  return (
    <nav
      aria-label="Primary"
      className={`
        relative inline-flex items-center gap-1.5 rounded-full
        border border-white/15
        bg-white/10 backdrop-blur-2xl backdrop-saturate-150
        px-2.5 py-2
        shadow-[0_10px_40px_-6px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.18)]
        before:pointer-events-none before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-b before:from-white/20 before:via-white/5 before:to-transparent
        before:opacity-70
        ${className}
      `}
    >
      {items.map((item, i) => {
        const isAnchor = item.href.startsWith("#") || item.href === "/"
        const linkProps = item.external
          ? { target: "_blank" as const, rel: "noreferrer" as const }
          : {}

        return (
          <a
            key={i}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            {...linkProps}
            className={`
              relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full
              transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:scale-110
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
              ${
                item.highlight
                  ? "bg-sky-300 text-black shadow-[0_6px_18px_-4px_rgba(125,211,252,0.6),inset_0_1px_0_rgba(255,255,255,0.6)] overflow-hidden"
                  : "bg-white/5 text-white/85 hover:bg-white/15 hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              }
            `}
            data-internal={isAnchor && item.href.startsWith("#") ? "true" : undefined}
          >
            {/* Conditional Rendering:
                If 'icon' is a string, render as an <img> tag.
                Otherwise, render as a React component.
            */}
            {typeof item.icon === "string" ? (
              <img 
                src={item.icon} 
                alt={item.label} 
                className="h-full w-full object-cover rounded-full" 
              />
            ) : (
              <item.icon className="h-3.5 w-3.5" strokeWidth={2} />
            )}
          </a>
        )
      })}
    </nav>
  )
}