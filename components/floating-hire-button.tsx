"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function FloatingHireButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down past the hero section
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleViewResume = () => {
    // Navigate to the resume section
    const resumeSection = document.getElementById("resume")
    if (resumeSection) {
      window.scrollTo({
        top: resumeSection.offsetTop - 80,
        behavior: "smooth",
      })
      // Toggle view mode in resume section if it's not already visible
      const viewResumeButton = document.querySelector("#resume button:nth-child(2)") as HTMLButtonElement
      if (viewResumeButton && viewResumeButton.textContent?.includes("View Resume")) {
        viewResumeButton.click()
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-20 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <Button onClick={handleViewResume} className="gradient-bg text-white hover-lift shadow-lg" size="lg">
            <Download className="mr-2 h-4 w-4" /> View My Resume
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
