"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Show cursor after a short delay to prevent initial animation from wrong position
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("card-hover")

      setIsHovering(isClickable)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  if (!mounted || !isVisible) return null

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: theme === "dark" ? "2px solid rgba(91, 234, 175, 0.5)" : "2px solid rgba(31, 75, 44, 0.5)",
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 800,
        damping: 30,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: theme === "dark" ? "rgba(91, 234, 175, 0.1)" : "rgba(31, 75, 44, 0.1)",
      border: theme === "dark" ? "2px solid rgba(91, 234, 175, 0.8)" : "2px solid rgba(31, 75, 44, 0.8)",
      mixBlendMode: "difference",
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 24,
      width: 24,
      backgroundColor: theme === "dark" ? "rgba(91, 234, 175, 0.3)" : "rgba(31, 75, 44, 0.3)",
      border: theme === "dark" ? "2px solid rgba(91, 234, 175, 1)" : "2px solid rgba(31, 75, 44, 1)",
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
      variants={cursorVariants}
      animate={isClicking ? "click" : isHovering ? "hover" : "default"}
    />
  )
}
