"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Mail, Phone, MapPin, ExternalLink, Sparkles, Star, Zap } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/edgar-mahlare-cv.html"
    link.download = "Edgar-Kgope-Mahlare-CV.html"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pattern-mesh opacity-20"></div>

      {/* Floating Orbs with Mouse Interaction */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-midnight-300/20 to-sage-300/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03,
          }}
          style={{
            top: "15%",
            left: "10%",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-coral-300/20 to-golden-300/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          style={{
            top: "60%",
            right: "15%",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-lavender-300/20 to-midnight-300/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * 0.015,
          }}
          style={{
            bottom: "25%",
            left: "35%",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -60 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-10 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="inline-flex"
            >
              <Badge className="glass-midnight px-8 py-4 text-midnight-800 border-midnight-300/50 text-base font-semibold shadow-lg">
                <div className="w-3 h-3 bg-sage-500 rounded-full mr-3 animate-pulse"></div>
                Available for Freelance Projects
                <Sparkles className="w-5 h-5 ml-3 text-golden-500" />
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  className="text-xl sm:text-2xl text-midnight-600 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  Hello, I'm
                </motion.p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="text-gradient-midnight">Edgar Kgope</span>
                  <br />
                  <span className="text-gradient-midnight">Mahlare</span>
                </h1>
              </div>

              <div className="space-y-6">
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-coral"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                  transition={{ delay: 0.9, duration: 1 }}
                >
                  UI/UX Designer & Creative Strategist
                </motion.h2>
                <motion.p
                  className="text-xl sm:text-2xl text-midnight-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ delay: 1.1, duration: 1 }}
                >
                  Crafting exceptional digital experiences through user-centered design, strategic innovation, and
                  creative solutions that transform businesses and delight users worldwide.
                </motion.p>
              </div>
            </motion.div>

            {/* Skills Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {[
                { skill: "Figma Expert", color: "from-coral-100 to-coral-200 text-coral-800", icon: "🎨" },
                { skill: "User Research", color: "from-sage-100 to-sage-200 text-sage-800", icon: "🔍" },
                { skill: "Prototyping", color: "from-midnight-100 to-midnight-200 text-midnight-800", icon: "⚡" },
                { skill: "Design Systems", color: "from-golden-100 to-golden-200 text-golden-800", icon: "🎯" },
                { skill: "Accessibility", color: "from-lavender-100 to-lavender-200 text-lavender-800", icon: "♿" },
                { skill: "Brand Strategy", color: "from-coral-100 to-coral-200 text-coral-800", icon: "🚀" },
              ].map((item, index) => (
                <motion.span
                  key={item.skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className={`px-5 py-3 bg-gradient-to-r ${item.color} rounded-2xl text-sm font-bold border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default flex items-center gap-2`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="btn-primary group relative overflow-hidden glow-midnight"
              >
                <span className="relative z-10 flex items-center text-lg">
                  View My Work
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-midnight-800 to-midnight-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <Button onClick={handleDownloadCV} className="btn-secondary group relative overflow-hidden">
                <span className="relative z-10 flex items-center text-lg">
                  <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Download CV
                </span>
              </Button>
            </motion.div>

            {/* Contact Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 2, duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-base"
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start text-midnight-700 group hover:text-coral-600 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-coral-100 to-coral-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-coral-600" />
                </div>
                <a href="tel:+27814720477" className="font-semibold">
                  +27 81 472 0477
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start text-midnight-700 group hover:text-sage-600 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-sage-100 to-sage-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-sage-600" />
                </div>
                <a href="mailto:kgopemahlare@gmail.com" className="font-semibold">
                  kgopemahlare@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start text-midnight-700 group hover:text-golden-600 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-golden-100 to-golden-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="h-5 w-5 text-golden-600" />
                </div>
                <span className="font-semibold">Polokwane, SA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 60 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-12 bg-gradient-to-r from-midnight-200/40 via-coral-200/40 to-sage-200/40 rounded-full blur-3xl animate-gradient-shift"></div>

              {/* Main Profile Card */}
              <motion.div
                className="relative card-premium max-w-md mx-auto"
                whileHover={{ scale: 1.03, rotateY: 8 }}
                transition={{ duration: 0.4 }}
              >
                {/* Profile Image */}
                <div className="relative mb-10">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 bg-gradient-to-br from-coral-400 to-golden-500 rounded-3xl rotate-6 opacity-20"></div>
                    <div className="absolute inset-3 bg-gradient-to-br from-sage-400 to-midnight-500 rounded-3xl -rotate-3 opacity-15"></div>

                    {/* Main Image Container */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                      <Image
                        src="/edgar-profile-professional.png"
                        alt="Edgar Kgope Mahlare - UI/UX Designer"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 glass-coral rounded-2xl p-5 shadow-xl border-2 border-coral-200/60"
                  >
                    <div className="text-xs font-bold text-coral-700 mb-1">UI/UX</div>
                    <div className="text-xl font-bold text-coral-800 flex items-center">
                      Designer
                      <Star className="w-5 h-5 ml-2 text-golden-500" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                    className="absolute -bottom-6 -left-6 glass-sage rounded-2xl p-5 shadow-xl border-2 border-sage-200/60"
                  >
                    <div className="text-xs font-bold text-sage-700 mb-1">2+ Years</div>
                    <div className="text-xl font-bold text-sage-800 flex items-center">
                      Experience
                      <Zap className="w-5 h-5 ml-2 text-coral-500" />
                    </div>
                  </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <motion.div
                    className="glass-midnight rounded-2xl p-6 text-center border border-midnight-200/60"
                    whileHover={{ scale: 1.08, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-midnight-800 mb-2">15+</div>
                    <div className="text-sm text-midnight-600 font-semibold">Projects</div>
                  </motion.div>
                  <motion.div
                    className="glass-golden rounded-2xl p-6 text-center border border-golden-200/60"
                    whileHover={{ scale: 1.08, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-golden-800 mb-2">Merit</div>
                    <div className="text-sm text-golden-600 font-semibold">UX Cert</div>
                  </motion.div>
                </div>

                {/* Portfolio Link */}
                <div className="text-center">
                  <a
                    href="https://edgarmahlare.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-base text-midnight-600 hover:text-coral-700 transition-colors font-semibold group"
                  >
                    <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    edgarmahlare.vercel.app
                  </a>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-16 -left-16 w-24 h-24 bg-gradient-to-r from-golden-300/30 to-coral-300/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40"
              >
                <span className="text-4xl">🎨</span>
              </motion.div>

              <motion.div
                animate={{ y: [-20, 20, -20], rotate: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
                className="absolute -bottom-12 -right-12 glass-lavender rounded-2xl p-5 shadow-xl border-2 border-lavender-200/60"
              >
                <span className="text-3xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-8 h-12 border-2 border-midnight-400 rounded-full flex justify-center cursor-pointer hover:border-coral-600 transition-colors group"
            onClick={() => scrollToSection("about")}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-4 bg-midnight-500 rounded-full mt-3 group-hover:bg-coral-500 transition-colors"
            />
          </motion.div>
          <div className="text-sm text-midnight-600 text-center mt-4 font-semibold">Scroll to explore</div>
        </motion.div>
      </div>
    </section>
  )
}
