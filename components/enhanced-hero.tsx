"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"
import TypingAnimation from "./typing-animation"
import { useState, useEffect, useRef } from "react"

export default function EnhancedHero() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Parallax effects based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // 3D tilt effect based on mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      setMousePosition({
        x: x / rect.width,
        y: y / rect.height,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, []) // Empty dependency array since we don't need to re-add the listener

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/edgar-mahlare-cv.html"
    link.download = "Kgope-Edgar-Mahlare-CV.html"
    link.target = "_blank" // Add this to ensure it opens in a new tab if download fails
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Calculate 3D rotation based on mouse position
  const rotateX = isMobile ? 0 : mousePosition.y * 10 // -5 to 5 degrees
  const rotateY = isMobile ? 0 : -mousePosition.x * 10 // -5 to 5 degrees

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <motion.div
          className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-5 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            x: ["-30%", "-25%", "-30%"],
            y: ["20%", "15%", "20%"],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[10%] translate-y-[30%] rounded-full bg-primary opacity-5 blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            x: ["10%", "15%", "10%"],
            y: ["30%", "25%", "30%"],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ y, opacity }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: [0.95, 1], opacity: [0.5, 1] }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Pre-title animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-2"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Front-End UI Developer
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                Hi, I'm{" "}
              </motion.span>
              <motion.span
                className="gradient-text relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Kgope Edgar Mahlare
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </motion.span>
            </h1>

            <motion.h2
              className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <TypingAnimation
                texts={["Front-End UI Developer", "React Specialist", "UI/UX Enthusiast", "Creative Coder"]}
              />
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Designing user-first interfaces with passion and precision.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button
                asChild
                size="lg"
                className="hover-lift relative overflow-hidden group"
                data-cursor-text="Let's Talk"
              >
                <Link href="#contact" onClick={handleContactClick}>
                  <span className="relative z-10">Get in Touch</span>
                  <motion.span
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>

              <Button
                onClick={handleDownloadCV}
                size="lg"
                variant="outline"
                className="hover-lift border-primary hover:bg-primary/10 relative overflow-hidden group"
                data-cursor-text="Download CV"
              >
                <span className="relative z-10 flex items-center">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download My CV
                </span>
                <motion.span
                  className="absolute inset-0 bg-primary/10"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center mt-8 space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link
                href="https://github.com/edgarfx-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-cursor-text="GitHub"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="relative">
                  <Github size={24} />
                  <motion.span
                    className="absolute inset-0 rounded-full border border-primary"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="sr-only">GitHub</span>
                </motion.div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kgope-mahlare-587b95280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-cursor-text="LinkedIn"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="relative">
                  <Linkedin size={24} />
                  <motion.span
                    className="absolute inset-0 rounded-full border border-primary"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="sr-only">LinkedIn</span>
                </motion.div>
              </Link>
              <Link
                href="mailto:kgopemahlare@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-cursor-text="Email Me"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="relative">
                  <Mail size={24} />
                  <motion.span
                    className="absolute inset-0 rounded-full border border-primary"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="sr-only">Email</span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mt-8 lg:mt-0 perspective-1000"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div className={`relative ${isMobile ? "w-60 h-60" : "w-80 h-80"}`}>
              {/* Animated rings */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-${index * 4} rounded-full bg-primary/10 animate-float`}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    zIndex: -index,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 ${20 - index * 5}px rgba(145, 234, 175, ${0.3 - index * 0.05})`,
                      `0 0 ${40 - index * 10}px rgba(145, 234, 175, ${0.5 - index * 0.1})`,
                      `0 0 ${20 - index * 5}px rgba(145, 234, 175, ${0.3 - index * 0.05})`,
                    ],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
              ))}

              {/* Profile image with reveal animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                <Image src="/profile-image.jpeg" alt="Kgope Edgar Mahlare" fill className="object-cover" priority />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.span
            className="text-sm text-muted-foreground mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
