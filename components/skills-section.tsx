import type React from "react"
import {
  Code2,
  Palette,
  Braces,
  Server,
  Sparkles,
  Database,
  Cpu,
  Smartphone,
  GitBranch,
  Cloud,
  Figma,
  GraduationCap,
  Bug,
} from "lucide-react"
import { SiteHeader } from "./site-header"
import { FloatingDock } from "./floating-dock"

type IconBadgeProps = {
  children: React.ReactNode
  bg?: string
  color?: string
}

function IconBadge({ children, bg = "bg-zinc-800", color = "text-white" }: IconBadgeProps) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bg} ${color}`}
    >
      {children}
    </span>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  )
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0f0f10] p-5 md:p-6 ${className}`}
    >
      {children}
    </div>
  )
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-5 text-base md:text-lg font-semibold text-white">
      {children}
    </h3>
  )
}

function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-sm leading-relaxed text-white/60">{children}</p>
  )
}

export function SkillsSection() {
  return (
    <section
      id="explore"
      data-scene
      className="relative w-full bg-[#050505] text-white scroll-mt-10"
    >
      <SiteHeader variant="dark" />

      <div className="px-6 md:px-10 lg:px-14 pt-16 md:pt-24 pb-20">
        <h2
          data-reveal
          className="mx-auto max-w-5xl text-center text-balance text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05]"
        >
          Skills that fuel my passion
        </h2>

        <div className="mt-10 md:mt-12 flex justify-center">
          <FloatingDock />
        </div>

        {/* Masonry grid using CSS columns for organic heights */}
        <div className="mt-16 md:mt-20 columns-1 md:columns-2 lg:columns-3 gap-5 md:gap-6 [column-fill:_balance]">
          {/* Front-End */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-orange-600">
                <span className="text-xs font-bold">5</span>
              </IconBadge>
              <IconBadge bg="bg-yellow-400" color="text-black">
                <span className="text-xs font-bold">JS</span>
              </IconBadge>
              <IconBadge bg="bg-blue-600">
                <span className="text-xs font-bold">TS</span>
              </IconBadge>
              <IconBadge bg="bg-zinc-800">
                <span className="text-xs font-bold">N</span>
              </IconBadge>
              <IconBadge bg="bg-zinc-800" color="text-fuchsia-400">
                <Code2 className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-zinc-800" color="text-sky-400">
                <Braces className="h-4 w-4" />
              </IconBadge>
            </div>
            <CardTitle>Front-End Development</CardTitle>
            <CardBody>
              Building engaging and user-friendly web interfaces using modern
              frameworks and technologies with expertise.
            </CardBody>
          </Card>

          {/* Back-End */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-green-600">
                <span className="text-[10px] font-bold">node</span>
              </IconBadge>
              <IconBadge bg="bg-zinc-700">
                <span className="text-[10px] font-bold">exp</span>
              </IconBadge>
              <IconBadge bg="bg-emerald-800">
                <span className="text-[10px] font-bold">dj</span>
              </IconBadge>
              <IconBadge bg="bg-red-700">
                <span className="text-[10px] font-bold">R</span>
              </IconBadge>
            </div>
            <CardTitle>Back-End Development</CardTitle>
            <CardBody>
              Developing robust server-side logic and APIs to power dynamic and
              scalable web applications.
            </CardBody>
          </Card>

          {/* Core CS */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2">
              <Chip>Operating Systems</Chip>
              <Chip>Computer Networks</Chip>
              <Chip>Object-Oriented Programming</Chip>
              <Chip>DSA</Chip>
              <Chip>System Design</Chip>
            </div>
            <CardTitle>Core Computer Science Concepts</CardTitle>
            <CardBody>
              Demonstrating a strong foundation in core computer science
              principles, including problem-solving, system design, and
              efficient computing techniques.
            </CardBody>
          </Card>

          {/* Personal Development */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2">
              <Chip>Time Management</Chip>
              <Chip>Problem Solving</Chip>
              <Chip>Communication</Chip>
              <Chip>Leadership</Chip>
            </div>
            <CardTitle>
              <GraduationCap className="mb-2 hidden" />
              Personal Development
            </CardTitle>
            <CardBody>
              Committed to continuous learning and personal growth to excel in
              both professional and collaborative environments.
            </CardBody>
          </Card>

          {/* Styling & Design */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-blue-500">
                <span className="text-xs font-bold">3</span>
              </IconBadge>
              <IconBadge bg="bg-teal-500">
                <Palette className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-purple-600">
                <span className="text-xs font-bold">B</span>
              </IconBadge>
              <IconBadge bg="bg-pink-500">
                <span className="text-xs font-bold">S</span>
              </IconBadge>
              <IconBadge bg="bg-rose-600">
                <span className="text-xs font-bold">Mj</span>
              </IconBadge>
            </div>
            <CardTitle>Styling &amp; Design</CardTitle>
            <CardBody>
              Crafting visually appealing and responsive designs with advanced
              styling tools and frameworks.
            </CardBody>
          </Card>

          {/* Web Animations */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-fuchsia-600">
                <Sparkles className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-green-700">
                <Sparkles className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-emerald-500" color="text-black">
                <Sparkles className="h-4 w-4" />
              </IconBadge>
            </div>
            <CardTitle>Web Animations</CardTitle>
            <CardBody>
              Creating seamless animations and transitions to enhance user
              engagement and interactivity.
            </CardBody>
          </Card>

          {/* Cloud & Deployment */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-sky-600">
                <Cloud className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-blue-700">
                <Cloud className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-zinc-900">
                <span className="text-[10px] font-bold">aws</span>
              </IconBadge>
              <IconBadge bg="bg-blue-500">
                <Cloud className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-black" color="text-white">
                <span className="text-[10px] font-bold">V</span>
              </IconBadge>
            </div>
            <CardTitle>Cloud &amp; Deployment</CardTitle>
            <CardBody>
              Experienced in deploying and managing applications using modern
              cloud platforms and tools.
            </CardBody>
          </Card>

          {/* Testing & Debugging */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-orange-500">
                <Bug className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-zinc-800">
                <Bug className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-red-600">
                <span className="text-xs font-bold">Se</span>
              </IconBadge>
            </div>
            <CardTitle>Testing &amp; Debugging</CardTitle>
            <CardBody>
              Ensuring code quality and reliability through rigorous testing
              and debugging processes.
            </CardBody>
          </Card>

          {/* Programming Languages */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-blue-600">
                <span className="text-[10px] font-bold">Py</span>
              </IconBadge>
              <IconBadge bg="bg-sky-500">
                <span className="text-xs font-bold">C</span>
              </IconBadge>
              <IconBadge bg="bg-sky-700">
                <span className="text-xs font-bold">C++</span>
              </IconBadge>
              <IconBadge bg="bg-red-600">
                <span className="text-xs font-bold">Rb</span>
              </IconBadge>
            </div>
            <CardTitle>Programming Languages</CardTitle>
            <CardBody>
              Proficient in problem-solving and applying programming languages
              to implement efficient data structures and algorithms.
            </CardBody>
          </Card>

          {/* Database Management */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-zinc-700">
                <Database className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-blue-700">
                <Database className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-green-700">
                <Database className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-orange-500">
                <Database className="h-4 w-4" />
              </IconBadge>
            </div>
            <CardTitle>Database Management</CardTitle>
            <CardBody>
              Designing and managing databases to ensure secure and efficient
              data storage and retrieval.
            </CardBody>
          </Card>

          {/* Mobile App Development */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-cyan-600">
                <Smartphone className="h-4 w-4" />
              </IconBadge>
            </div>
            <CardTitle>Mobile App Development</CardTitle>
            <CardBody>
              Creating cross-platform mobile apps with sleek designs and robust
              functionality.
            </CardBody>
          </Card>

          {/* Version Control */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap gap-2.5">
              <IconBadge bg="bg-zinc-900">
                <GitBranch className="h-4 w-4" />
              </IconBadge>
              <IconBadge bg="bg-orange-600">
                <GitBranch className="h-4 w-4" />
              </IconBadge>
            </div>
            <CardTitle>Version Control &amp; Collaboration</CardTitle>
            <CardBody>
              Effectively managing code and collaborating on projects to
              ensure seamless teamwork.
            </CardBody>
          </Card>

          {/* UI/UX Design */}
          <Card className="mb-5 md:mb-6 break-inside-avoid">
            <div className="flex flex-wrap items-center gap-2.5">
              <IconBadge bg="bg-zinc-800">
                <Figma className="h-4 w-4 text-pink-400" />
              </IconBadge>
              <Chip>Prototyping</Chip>
              <Chip>Wireframing</Chip>
            </div>
            <CardTitle>UI/UX Design</CardTitle>
            <CardBody>
              Designing user-centric interfaces that are intuitive, visually
              appealing, and easy to navigate.
            </CardBody>
          </Card>

          {/* Filler icon to satisfy Cpu import usage */}
          <span className="hidden">
            <Cpu />
            <Server />
          </span>
        </div>
      </div>
    </section>
  )
}
