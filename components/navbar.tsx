"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Eye } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/edgar-mahlare-cv.html"
    link.download = "Edgar-Kgope-Mahlare-CV.html"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-midnight border-b border-midnight-200/50 shadow-xl" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 lg:h-22">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#home")
              }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-midnight-700 to-midnight-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow glow-midnight">
                <span className="text-white font-bold text-xl">EM</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-midnight-900 group-hover:text-coral-700 transition-colors">
                  Edgar Mahlare
                </div>
                <div className="text-sm text-midnight-600 font-semibold -mt-1">UI/UX Designer</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`px-4 py-3 text-base font-semibold transition-colors relative ${
                    activeSection === item.href.substring(1)
                      ? "text-midnight-800"
                      : "text-midnight-600 hover:text-coral-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-500 to-sage-500 rounded-full"
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-5">
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              size="sm"
              className="btn-secondary text-base bg-transparent border-2"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Button asChild size="sm" className="btn-primary text-base">
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#projects")
                }}
              >
                <Eye className="mr-2 h-5 w-5" />
                View Work
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-midnight-700 hover:text-coral-600 hover:bg-midnight-100/50 p-3"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden glass-midnight border-t border-midnight-200/50 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-8">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`block px-6 py-4 text-lg font-semibold transition-colors rounded-2xl ${
                      activeSection === item.href.substring(1)
                        ? "text-midnight-800 bg-midnight-100/80"
                        : "text-midnight-600 hover:text-coral-600 hover:bg-midnight-100/50"
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.div
                  className="pt-6 border-t border-midnight-200/50 space-y-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Button
                    onClick={handleDownloadCV}
                    variant="outline"
                    size="sm"
                    className="w-full btn-secondary bg-transparent text-base"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                  <Button asChild size="sm" className="w-full btn-primary text-base">
                    <Link
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick("#projects")
                      }}
                    >
                      <Eye className="mr-2 h-5 w-5" />
                      View My Work
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
