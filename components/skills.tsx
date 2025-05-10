"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Palette, FileCode, GitBranch, MonitorSmartphone } from "lucide-react"
import SectionHeading from "./section-heading"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"

const skillCategories = [
  {
    name: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "ES6+"],
    logos: ["/logos/html-logo.png", "/logos/css-logo.png", "/logos/js-logo.png", "/logos/ts-logo.png"],
  },
  {
    name: "Frameworks",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    logos: ["/logos/react-logo.png"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design"],
    logos: ["/logos/figma-logo.png"],
  },
  {
    name: "Tools",
    icon: FileCode,
    skills: ["VS Code", "Chrome DevTools", "Vercel", "Netlify"],
    logos: [],
  },
  {
    name: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
    logos: ["/logos/github-logo.png"],
  },
  {
    name: "Other",
    icon: MonitorSmartphone,
    skills: ["Responsive Web", "Performance Optimization", "SEO Basics", "Accessibility"],
    logos: [],
  },
]

export default function Skills() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Skills" subtitle="What I bring to the table" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover={{
                scale: isMobile ? 1.01 : 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="h-full card-hover">
                <CardContent className="p-6">
                  <motion.div
                    className="flex items-center mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </motion.div>

                  {/* Tech logos */}
                  {category.logos.length > 0 && (
                    <motion.div
                      className="flex flex-wrap gap-3 mb-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {category.logos.map((logo, logoIndex) => (
                        <motion.div
                          key={logoIndex}
                          className="relative w-10 h-10"
                          variants={logoVariants}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Image
                            src={logo || "/placeholder.svg"}
                            alt={`Technology logo ${logoIndex + 1}`}
                            fill
                            className="object-contain"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-accent rounded-full text-sm font-medium"
                        variants={skillVariants}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(145, 234, 175, 0.2)",
                          color: "rgba(145, 234, 175, 1)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
