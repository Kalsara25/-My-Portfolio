import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorksSection } from "@/components/works-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollScene } from "@/components/scroll-scene"

export default function Page() {
  return (
    
    
    <div className="relative">
      <ScrollScene>
        <main id="top" className="relative min-h-screen bg-background text-foreground">
          <HeroSection />
          <AboutSection />
          <WorksSection />
          <SkillsSection />
          <ContactSection variant="dark" />
          <SiteFooter />
        </main>
      </ScrollScene>
    </div>
  )
}