"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import SectionHeading from "./section-heading"
import { useMediaQuery } from "@/hooks/use-media-query"

const experiences = [
  {
    title: "Graphic Designer & Brand Manager",
    company: "Jaydee X Clothing",
    period: "2022 - Present",
    description: [
      "Designed promotional graphics, logos, and marketing content",
      "Managed customer inquiries through digital platforms",
      "Collaborated with developers to align branding across web interfaces",
      "Designed and built a promotional site for a clothing brand",
      "Created a dynamic product showcase with animations, responsive layout, and modular code",
    ],
  },
  {
    title: "Software Developer",
    company: "IIE Rosebank College",
    period: "12/2023 - Present",
    description: [
      "Developed and maintained web applications using modern technologies",
      "Collaborated with cross-functional teams to implement new features",
      "Optimized application performance and user experience",
    ],
  },
  {
    title: "UI/UX Design, Front-End Development",
    company: "Freelance Developer",
    period: "Ongoing",
    description: [
      "Self-taught via online platforms such as FreeCodeCamp, Coursera & YouTube",
      "Responsive Web Design Certification",
      "JavaScript Algorithms & Data Structures",
      "React Fundamentals",
      "Developed a personal portfolio showcasing projects in design and front-end development",
      "Integrated responsive design and optimized performance for mobile and desktop",
    ],
  },
]

export default function Experience() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.2 : 0.3,
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="experience" className="section-padding bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: isMobile ? 1.01 : 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="card-hover overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <motion.div
                      className="md:w-1/3 bg-primary/5 p-6"
                      initial={{ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? -20 : 0 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <motion.div
                        className="flex items-center mt-2 text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{exp.company}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center mt-2 text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="md:w-2/3 p-6"
                      initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 20 : 0 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <h4 className="font-medium mb-3">Key Responsibilities & Achievements</h4>
                      <motion.ul
                        className="space-y-2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            variants={listItemVariants}
                            custom={i}
                            whileHover={{ x: 5 }}
                          >
                            <motion.span
                              className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: index * 0.1 + 0.2 + i * 0.1,
                                type: "spring",
                                stiffness: 300,
                              }}
                            >
                              •
                            </motion.span>
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
