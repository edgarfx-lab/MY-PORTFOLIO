"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"
// Import the TypingAnimation component
import TypingAnimation from "./typing-animation"

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)")

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

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-5 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[10%] translate-y-[30%] rounded-full bg-primary opacity-5 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: [0.95, 1], opacity: [0.5, 1] }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                Hi, I'm{" "}
              </motion.span>
              <motion.span
                className="gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Kgope Edgar Mahlare
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
              <Button asChild size="lg" className="hover-lift">
                <Link href="#contact" onClick={handleContactClick}>
                  Get in Touch
                </Link>
              </Button>

              <Button
                onClick={handleDownloadCV}
                size="lg"
                variant="outline"
                className="hover-lift border-primary hover:bg-primary/10"
              >
                <Download className="mr-2 h-4 w-4" /> Download My CV
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
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Github size={24} />
                  <span className="sr-only">GitHub</span>
                </motion.div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kgope-mahlare-587b95280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </motion.div>
              </Link>
              <Link
                href="mailto:kgopemahlare@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile image in animated circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mt-8 lg:mt-0"
          >
            <div className={`relative ${isMobile ? "w-60 h-60" : "w-80 h-80"}`}>
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10 animate-float"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(145, 234, 175, 0.3)",
                    "0 0 40px rgba(145, 234, 175, 0.5)",
                    "0 0 20px rgba(145, 234, 175, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="absolute inset-4 rounded-full bg-primary/20 animate-float"
                style={{ animationDelay: "0.5s" }}
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(145, 234, 175, 0.2)",
                    "0 0 30px rgba(145, 234, 175, 0.4)",
                    "0 0 10px rgba(145, 234, 175, 0.2)",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              ></motion.div>
              <motion.div
                className="absolute inset-8 rounded-full bg-primary/30 animate-float"
                style={{ animationDelay: "1s" }}
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(145, 234, 175, 0.1)",
                    "0 0 20px rgba(145, 234, 175, 0.3)",
                    "0 0 5px rgba(145, 234, 175, 0.1)",
                  ],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              ></motion.div>

              {/* Profile image */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1, type: "spring" }}
              >
                <Image src="/profile-image.jpeg" alt="Edgar Mahlare" fill className="object-cover" priority />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
