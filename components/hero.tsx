"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Mail, Phone, MapPin, ExternalLink, Sparkles, Star, Zap, Play } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

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
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const skills = [
    { skill: "Figma Expert", color: "from-coral-100 to-coral-200 text-coral-800", icon: "🎨" },
    { skill: "User Research", color: "from-navy-100 to-navy-200 text-navy-800", icon: "🔍" },
    { skill: "Prototyping", color: "from-teal-100 to-teal-200 text-teal-800", icon: "⚡" },
    { skill: "Design Systems", color: "from-violet-100 to-violet-200 text-violet-800", icon: "🎯" },
    { skill: "Accessibility", color: "from-emerald-100 to-emerald-200 text-emerald-800", icon: "♿" },
    { skill: "Brand Strategy", color: "from-amber-100 to-amber-200 text-amber-800", icon: "🚀" },
  ]

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      style={{ y, opacity }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pattern-mesh opacity-30"></div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Orb */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-navy-300/20 to-teal-300/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.1, 1],
          }}
          transition={{
            scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          style={{
            top: "10%",
            left: "10%",
          }}
        />

        {/* Secondary Orb */}
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-coral-300/20 to-violet-300/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
            scale: [1, 1.2, 1],
          }}
          transition={{
            scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
          }}
          style={{
            top: "60%",
            right: "10%",
          }}
        />

        {/* Tertiary Orb */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-violet-300/20 to-navy-300/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
            scale: [1, 1.15, 1],
          }}
          transition={{
            scale: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 },
          }}
          style={{
            bottom: "20%",
            left: "30%",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -60 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-10 text-center lg:text-left"
          >
            {/* Enhanced Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30, scale: isVisible ? 1 : 0.8 }}
              transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
              className="inline-flex"
            >
              <Badge className="glass-navy px-8 py-4 text-navy-800 border-navy-300/50 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <motion.div
                  className="w-3 h-3 bg-emerald-500 rounded-full mr-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                Available for Freelance Projects
                <Sparkles className="w-5 h-5 ml-3 text-coral-500" />
              </Badge>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  className="text-xl sm:text-2xl text-slate-700 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  Hello, I'm
                </motion.p>

                <div className="relative">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    <motion.span
                      className="text-gradient-primary block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      Edgar Kgope
                    </motion.span>
                    <motion.span
                      className="text-gradient-primary block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      Mahlare
                    </motion.span>
                  </h1>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-coral-400 to-violet-400 rounded-full opacity-60"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                  transition={{ delay: 1.2, duration: 1 }}
                >
                  UI/UX Designer & Creative Strategist
                </motion.h2>

                <motion.p
                  className="text-xl sm:text-2xl text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ delay: 1.4, duration: 1 }}
                >
                  Crafting exceptional digital experiences through user-centered design, strategic thinking, and
                  innovative solutions that drive meaningful results for businesses and delight users worldwide.
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Skills Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {skills.map((item, index) => (
                <motion.span
                  key={item.skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, y: isVisible ? 0 : 20 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-3 bg-gradient-to-r ${item.color} rounded-2xl text-sm font-semibold border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default flex items-center gap-2 group`}
                >
                  <motion.span
                    className="text-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                  >
                    {item.icon}
                  </motion.span>
                  {item.skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="btn-primary group relative overflow-hidden glow-navy text-lg px-8 py-4 shadow-2xl hover:shadow-3xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  View My Work
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-navy-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </Button>

              <Button
                onClick={handleDownloadCV}
                className="btn-secondary group relative overflow-hidden text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  <Download className="mr-3 h-6 w-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
                  Download CV
                </span>
              </Button>
            </motion.div>

            {/* Enhanced Contact Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-base"
            >
              {[
                { icon: Phone, text: "+27 81 472 0477", href: "tel:+27814720477", color: "text-navy-600" },
                {
                  icon: Mail,
                  text: "kgopemahlare@gmail.com",
                  href: "mailto:kgopemahlare@gmail.com",
                  color: "text-teal-600",
                },
                { icon: MapPin, text: "Polokwane, SA", href: null, color: "text-coral-600" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start text-slate-700 group hover:text-slate-900 transition-colors"
                  whileHover={{ scale: 1.05, x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ delay: 2.3 + index * 0.1, duration: 0.6 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="font-semibold hover:underline">
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-semibold">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 60 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Enhanced Background Glow */}
              <motion.div
                className="absolute -inset-12 bg-gradient-to-r from-navy-200/40 via-teal-200/40 to-coral-200/40 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
              />

              {/* Enhanced Main Profile Card */}
              <motion.div
                className="relative card-premium max-w-sm mx-auto"
                whileHover={{
                  scale: 1.03,
                  rotateY: 8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                initial={{ rotateY: -10 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {/* Enhanced Profile Image */}
                <div className="relative mb-10">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
                    {/* Enhanced Decorative Rings */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-navy-300 to-teal-400 rounded-3xl opacity-20"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      style={{ rotate: 3 }}
                    />
                    <motion.div
                      className="absolute inset-2 bg-gradient-to-br from-coral-300 to-violet-400 rounded-3xl opacity-15"
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      style={{ rotate: -2 }}
                    />

                    {/* Enhanced Main Image Container */}
                    <motion.div
                      className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src="/edgar-profile-professional.png"
                        alt="Edgar Kgope Mahlare - UI/UX Designer"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/10 to-transparent"></div>
                    </motion.div>
                  </div>

                  {/* Enhanced Floating Elements */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 8, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-6 -right-6 glass-navy rounded-2xl p-5 shadow-xl border-2 border-navy-200/50 hover:shadow-2xl transition-shadow cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="text-xs font-semibold text-navy-700 mb-1">UI/UX</div>
                    <div className="text-lg font-bold text-navy-800 flex items-center">
                      Designer
                      <Star className="w-4 h-4 ml-2 text-coral-500" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                      rotate: [0, -8, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                    className="absolute -bottom-6 -left-6 glass-teal rounded-2xl p-5 shadow-xl border-2 border-teal-200/50 hover:shadow-2xl transition-shadow cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <div className="text-xs font-semibold text-teal-700 mb-1">2+ Years</div>
                    <div className="text-lg font-bold text-teal-800 flex items-center">
                      Experience
                      <Zap className="w-4 h-4 ml-2 text-emerald-500" />
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <motion.div
                    className="glass-coral rounded-2xl p-6 text-center border border-coral-200/50 cursor-pointer"
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-coral-800 mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    >
                      15+
                    </motion.div>
                    <div className="text-sm text-coral-600 font-medium">Projects</div>
                  </motion.div>

                  <motion.div
                    className="glass-violet rounded-2xl p-6 text-center border border-violet-200/50 cursor-pointer"
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-violet-800 mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                    >
                      Merit
                    </motion.div>
                    <div className="text-sm text-violet-600 font-medium">UX Cert</div>
                  </motion.div>
                </div>

                {/* Enhanced Portfolio Link */}
                <div className="text-center">
                  <motion.a
                    href="https://edgarmahlare.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-base text-slate-600 hover:text-navy-700 transition-colors font-semibold group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                    edgarmahlare.vercel.app
                  </motion.a>
                </div>
              </motion.div>

              {/* Enhanced Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute -top-16 -left-16 w-24 h-24 bg-gradient-to-r from-coral-300/30 to-violet-300/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 cursor-pointer hover:scale-110 transition-transform"
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-4xl">🎨</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 15, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 3,
                }}
                className="absolute -bottom-12 -right-12 glass-coral rounded-2xl p-6 shadow-xl border-2 border-coral-200/50 cursor-pointer hover:scale-110 transition-transform"
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <span className="text-3xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-8 h-14 border-2 border-navy-400 rounded-full flex justify-center cursor-pointer hover:border-navy-600 transition-colors group"
            onClick={() => scrollToSection("about")}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-6 bg-navy-500 rounded-full mt-3 group-hover:bg-navy-600 transition-colors"
            />
          </motion.div>
          <motion.div
            className="text-sm text-navy-600 text-center mt-4 font-semibold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
