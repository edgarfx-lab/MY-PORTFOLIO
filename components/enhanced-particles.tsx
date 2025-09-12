"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useMousePosition } from "@/hooks/use-mouse-position"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export default function EnhancedParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const mousePosition = useMousePosition()
  const mouseRadius = 150 // Radius of mouse influence

  // Initialize dimensions and handle resize
  useEffect(() => {
    setMounted(true)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight * 2, // Make canvas taller to cover scrolling
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Initialize particles
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const particleCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 12000), 150)
    const particles: Particle[] = []

    const isDark = theme === "dark"
    const baseColor = isDark ? "91, 234, 175" : "31, 75, 44" // Primary color in RGB

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,
        color: `rgba(${baseColor}, ${Math.random() * 0.3 + 0.2})`,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    particlesRef.current = particles
  }, [dimensions, theme, mounted])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Check if particle is near mouse
        if (mousePosition.x && mousePosition.y) {
          const dx = particle.x - mousePosition.x
          const dy = particle.y - mousePosition.y - window.scrollY // Adjust for scrolling
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRadius) {
            // Repel particles from mouse
            const angle = Math.atan2(dy, dx)
            const force = (mouseRadius - distance) / mouseRadius
            particle.x += Math.cos(angle) * force * 2
            particle.y += Math.sin(angle) * force * 2
            particle.opacity = Math.min(1, particle.opacity + 0.05) // Increase opacity when interacting
          } else {
            // Gradually return to normal opacity
            particle.opacity = Math.max(0.2, particle.opacity - 0.01)
          }
        }

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${particle.opacity})`)
        ctx.fill()
      })

      // Draw connections
      ctx.strokeStyle = theme === "dark" ? "rgba(91, 234, 175, 0.05)" : "rgba(31, 75, 44, 0.05)"
      ctx.lineWidth = 1

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            // Fade connections based on distance
            const opacity = 0.05 * (1 - distance / 150)
            ctx.strokeStyle = theme === "dark" ? `rgba(91, 234, 175, ${opacity})` : `rgba(31, 75, 44, ${opacity})`

            ctx.beginPath()
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dimensions, theme, mounted, mousePosition.x, mousePosition.y, mouseRadius])

  if (!mounted) return null

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
