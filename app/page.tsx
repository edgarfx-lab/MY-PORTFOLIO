import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import MobileAnimation from "@/components/mobile-animation"
import Resume from "@/components/resume"
import FloatingHireButton from "@/components/floating-hire-button"
import TechStack from "@/components/tech-stack"
import SkillChart from "@/components/skill-chart"
import LoadingAnimation from "@/components/loading-animation"
import EnhancedParticles from "@/components/enhanced-particles"
import EnhancedCursor from "@/components/enhanced-cursor"
import ScrollProgress from "@/components/scroll-progress"
import EnhancedHero from "@/components/enhanced-hero"
import SectionTransition from "@/components/section-transition"

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <EnhancedParticles />
      <EnhancedCursor />
      <ScrollProgress />
      <MobileAnimation />

      <EnhancedHero />

      <SectionTransition>
        <About />
      </SectionTransition>

      <SectionTransition delay={0.1}>
        <Skills />
      </SectionTransition>

      <SectionTransition delay={0.2}>
        <SkillChart />
      </SectionTransition>

      <SectionTransition delay={0.1}>
        <TechStack />
      </SectionTransition>

      <SectionTransition delay={0.2}>
        <Experience />
      </SectionTransition>

      <SectionTransition delay={0.1}>
        <Resume />
      </SectionTransition>

      <SectionTransition delay={0.2}>
        <Contact />
      </SectionTransition>

      <FloatingHireButton />
    </>
  )
}
