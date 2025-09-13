"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export default function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Handle the typing/deleting animation
    if (!isDeleting && currentText === texts[currentTextIndex]) {
      // Finished typing, wait before deleting
      setIsBlinking(true)
      timeout = setTimeout(() => {
        setIsBlinking(false)
        setIsDeleting(true)
      }, delayBetweenTexts)
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next text
      setIsDeleting(false)
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    } else {
      // Still typing or deleting
      setIsBlinking(false)
      const speed = isDeleting ? deletingSpeed : typingSpeed

      timeout = setTimeout(() => {
        setCurrentText((prevText) => {
          if (isDeleting) {
            return prevText.slice(0, -1)
          } else {
            const fullText = texts[currentTextIndex]
            return fullText.slice(0, prevText.length + 1)
          }
        })
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <div className="inline-flex items-center">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="gradient-text">
        {currentText}
      </motion.span>
      <motion.span
        animate={{ opacity: isBlinking ? [1, 0, 1] : 1 }}
        transition={{ repeat: isBlinking ? Number.POSITIVE_INFINITY : 0, duration: 0.8 }}
        className="ml-1 w-0.5 h-6 bg-primary inline-block"
      />
    </div>
  )
}
