"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingHireButton from "@/components/floating-hire-button"
import ScrollProgress from "@/components/scroll-progress"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Certifications />
      <Contact />

      <Footer />
      <FloatingHireButton />
      <BackToTop />
    </main>
  )
}
