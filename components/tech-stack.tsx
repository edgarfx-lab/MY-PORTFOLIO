"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

// Define the tech stack with logos and names
const technologies = [
  {
    name: "HTML5",
    logo: "/logos/html-logo.png",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "CSS3",
    logo: "/logos/css-logo.png",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "JavaScript",
    logo: "/logos/js-logo.png",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    name: "TypeScript",
    logo: "/logos/ts-logo.png",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "React",
    logo: "/logos/react-logo.png",
    color: "from-cyan-400 to-cyan-500",
  },
  {
    name: "Figma",
    logo: "/logos/figma-logo.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "GitHub",
    logo: "/logos/github-logo.png",
    color: "from-gray-700 to-gray-800",
  },
]

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Tech Stack" subtitle="Technologies I work with" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <motion.div
                className={`relative w-24 h-24 mb-4 p-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech.name}
              </motion.div>
              <motion.p
                className="text-center font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {tech.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
