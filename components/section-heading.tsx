"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  highlightedWord?: string
}

export default function SectionHeading({ title, subtitle, highlightedWord }: SectionHeadingProps) {
  // If highlightedWord is not provided, use the entire title as gradient text
  const titleContent = highlightedWord ? (
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      {title.split(highlightedWord)[0]}
      <span className="gradient-text">{highlightedWord}</span>
      {title.split(highlightedWord)[1]}
    </h2>
  ) : (
    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{title}</h2>
  )

  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          {titleContent}
        </motion.div>

        {subtitle && (
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto mt-6"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "6rem", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </motion.div>
    </div>
  )
}
