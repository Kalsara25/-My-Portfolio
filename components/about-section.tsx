import { ArrowUpRight } from "lucide-react"

export function AboutSection() {
  return (
    <section
      id="about"
      data-scene
      className="px-6 md:px-10 lg:px-14 py-16 md:py-24"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7" data-reveal>
          <h2 className="text-pretty text-xl md:text-2xl lg:text-3xl leading-snug font-medium text-foreground">
            A curious student blending AI and creative design to build simple,
            functional, and visually compelling digital experiences — where
            every solution tells a story.
          </h2>
        </div>

        <div className="md:col-span-5 md:col-start-9" data-reveal data-reveal-delay="0.15">
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground md:text-right">
            Merging a passion for design, development, and intelligence to
            craft seamless experiences at the intersection of creativity and
            technology.
          </p>

          <div className="mt-6 flex md:justify-end">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm md:text-base text-foreground hover:opacity-80"
            >
              <span>More about me</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-foreground/30">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
