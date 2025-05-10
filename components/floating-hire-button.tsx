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

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/edgar-mahlare-cv.pdf"
    link.download = "Edgar-Mahlare-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
          <Button onClick={handleDownloadCV} className="gradient-bg text-white hover-lift shadow-lg" size="lg">
            <Download className="mr-2 h-4 w-4" /> Hire Me - My CV is here
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
