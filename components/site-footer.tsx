import { ArrowUpRight } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative w-full bg-black text-white">
      <div className="px-6 md:px-10 lg:px-14 pt-10 md:pt-14 pb-6 md:pb-10">
        <div className="flex items-center justify-between gap-6">
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            your friendly chaos creator
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
          >
            <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} />
          </a>
        </div>

        <div className="mt-6 md:mt-10 -mb-4">
          <div
            aria-label="Kalsara"
            className="select-none text-balance font-medium tracking-tight leading-none text-white"
            style={{
              fontSize: "clamp(5rem, 28vw, 26rem)",
            }}
          >
            Kalsara
          </div>
        </div>
      </div>
    </footer>
  )
}
