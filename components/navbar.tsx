"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Eye, User, Briefcase, FolderOpen, Award, Mail } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home", icon: User },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Testimonials", href: "#testimonials", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
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
      const offsetTop = targetElement.offsetTop - 100
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
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-navy border-b border-navy-200/30 shadow-xl backdrop-blur-xl"
            : "bg-transparent backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#home")
                }}
                className="flex items-center space-x-3 group"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-lg">EM</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-navy-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg font-bold text-slate-900 group-hover:text-navy-700 transition-colors">
                    Edgar Mahlare
                  </div>
                  <div className="text-xs text-slate-600 font-medium -mt-1">UI/UX Designer</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                      activeSection === item.href.substring(1)
                        ? "text-navy-800 bg-navy-100/80"
                        : "text-slate-700 hover:text-navy-800 hover:bg-slate-100/80"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-navy-600 rounded-full"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="sm"
                className="btn-secondary text-sm bg-transparent border-2 hover:scale-105 transition-transform"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button asChild size="sm" className="btn-primary text-sm hover:scale-105 transition-transform shadow-lg">
                <Link
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick("#projects")
                  }}
                >
                  <Eye className="mr-2 h-4 w-4" />
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
                className="text-slate-700 hover:text-navy-800 hover:bg-slate-100/80 p-3 rounded-xl"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden glass-navy border-t border-navy-200/30 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="container-custom py-8">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={`flex items-center space-x-3 px-4 py-4 text-base font-semibold transition-all duration-300 rounded-2xl ${
                        activeSection === item.href.substring(1)
                          ? "text-navy-800 bg-navy-100/90 shadow-md"
                          : "text-slate-700 hover:text-navy-800 hover:bg-slate-100/80"
                      }`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.02, x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-navy-600 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  ))}

                  <motion.div
                    className="pt-6 border-t border-navy-200/30 space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.2 }}
                  >
                    <Button
                      onClick={handleDownloadCV}
                      variant="outline"
                      size="sm"
                      className="w-full btn-secondary bg-transparent border-2 py-4 text-base"
                    >
                      <Download className="mr-3 h-5 w-5" />
                      Download Resume
                    </Button>
                    <Button asChild size="sm" className="w-full btn-primary py-4 text-base shadow-lg">
                      <Link
                        href="#projects"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("#projects")
                        }}
                      >
                        <Eye className="mr-3 h-5 w-5" />
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

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-500 via-teal-500 to-coral-500 z-50 origin-left"
        style={{
          scaleX: scrolled ? 1 : 0,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}
