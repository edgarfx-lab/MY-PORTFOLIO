import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingHireButton from "@/components/floating-hire-button"
import ScrollProgress from "@/components/scroll-progress"
import BackToTop from "@/components/back-to-top"
import EnhancedParticles from "@/components/enhanced-particles"
import EnhancedCursor from "@/components/enhanced-cursor"
import LoadingAnimation from "@/components/loading-animation"

export default function Home() {
  return (
    <main className="relative">
      <LoadingAnimation />
      <EnhancedParticles />
      <EnhancedCursor />
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Testimonials />
      <Contact />

      <Footer />
      <FloatingHireButton />
      <BackToTop />
    </main>
  )
}
