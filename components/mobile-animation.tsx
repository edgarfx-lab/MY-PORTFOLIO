"use client"

import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function MobileAnimation() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    // Only show the animation on mobile devices
    if (isMobile) {
      setShowAnimation(true)

      // Hide the animation after 3 seconds
      const timer = setTimeout(() => {
        setShowAnimation(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isMobile])

  if (!isMobile || !showAnimation) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={() => setShowAnimation(false)}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 1.5, type: "spring" }}
        className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary"
      >
        <Image src="/profile-image.jpeg" alt="Edgar Mahlare" fill className="object-cover" priority />
      </motion.div>
    </motion.div>
  )
}
