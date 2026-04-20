"use client"

import { motion } from "framer-motion"

interface MarqueeTextProps {
  /** The string that scrolls infinitely. */
  text: string
  /** Any valid CSS font-size (px / clamp()). */
  size?: string
  /** Extra classes on the outer (overflow-hidden) wrapper. */
  className?: string
  /** Duration (seconds) for one full loop. Lower = faster. */
  duration?: number
}

/**
 * MarqueeText
 * -----------
 * Seamless right-to-left infinite scroller powered by Framer Motion.
 */
export function MarqueeText({
  text,
  size = "200px",
  className = "",
  duration = 40,
}: MarqueeTextProps) {
  return (
    <div
      aria-label={text}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <motion.div
        className="flex w-max will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {[0, 1].map((copy) => (
          <span
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            // v0 එකේ තිබ්බfont class එකම භාවිතා කරනවා
            className="font-black leading-none select-none pr-[0.35em]"
            style={{
              fontSize: size,
              
              // line-height change 1.1 
              lineHeight: 1.1, 
              // padding-bottom 
              paddingBottom: "0.15em", 
            }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}