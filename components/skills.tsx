"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Figma,
  Search,
  Layers,
  PenTool,
  TestTube,
  Accessibility,
  Users,
  Palette,
  Zap,
  Target,
  BarChart3,
  Smartphone,
} from "lucide-react"
import SectionHeading from "./section-heading"
import { useMediaQuery } from "@/hooks/use-media-query"

const designSkills = [
  {
    category: "UX Research & Strategy",
    icon: Search,
    skills: ["User Interviews", "Usability Testing", "Journey Mapping", "Personas", "Competitive Analysis"],
    description: "Understanding users through research to inform design decisions",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    category: "Interaction Design",
    icon: PenTool,
    skills: ["Wireframing", "Prototyping", "User Flows", "Information Architecture", "Micro-interactions"],
    description: "Crafting intuitive and engaging user interactions",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    category: "Visual Design",
    icon: Palette,
    skills: ["UI Design", "Typography", "Color Theory", "Layout Design", "Brand Systems"],
    description: "Creating beautiful and functional visual interfaces",
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-600",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    category: "Design Systems",
    icon: Layers,
    skills: ["Component Libraries", "Design Tokens", "Style Guides", "Pattern Libraries", "Atomic Design"],
    description: "Building scalable and consistent design systems",
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "text-indigo-600",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    category: "Tools & Software",
    icon: Figma,
    skills: ["Figma", "Adobe XD", "Miro", "FigJam", "Principle", "After Effects"],
    description: "Proficient in industry-standard design tools",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    gradient: "from-green-500 to-green-600",
  },
  {
    category: "Accessibility & Inclusion",
    icon: Accessibility,
    skills: ["WCAG Guidelines", "Screen Reader Testing", "Color Contrast", "Inclusive Design", "Keyboard Navigation"],
    description: "Designing for all users regardless of ability",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    gradient: "from-orange-500 to-orange-600",
  },
]

const designProcess = [
  {
    phase: "Discover",
    icon: Target,
    description: "Research, stakeholder interviews, problem definition",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    phase: "Define",
    icon: BarChart3,
    description: "User personas, journey maps, requirements analysis",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    phase: "Design",
    icon: PenTool,
    description: "Wireframes, prototypes, visual design, iterations",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    phase: "Deliver",
    icon: Smartphone,
    description: "Design handoff, documentation, developer collaboration",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    phase: "Validate",
    icon: TestTube,
    description: "User testing, feedback analysis, design refinement",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
]

const collaborationSkills = [
  { skill: "Cross-functional Collaboration", level: 95 },
  { skill: "Stakeholder Communication", level: 90 },
  { skill: "Design Critique & Feedback", level: 88 },
  { skill: "Agile/Scrum Methodology", level: 85 },
  { skill: "Design Documentation", level: 92 },
  { skill: "Mentoring & Leadership", level: 80 },
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

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Design Skills & Expertise"
          subtitle="A comprehensive toolkit for creating exceptional user experiences"
        />

        {/* Main Design Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {designSkills.map((category, index) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              whileHover={{
                scale: isMobile ? 1.01 : 1.03,
                y: -5,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card
                className={`h-full ${category.color} shadow-lg border-2 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden`}
              >
                <CardContent className="p-6">
                  {/* Header with Icon */}
                  <motion.div
                    className="flex items-center mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  </motion.div>

                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">{category.description}</p>

                  {/* Skills Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-white/50"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
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

        {/* Design Process Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Zap className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-medium">My Design Process</span>
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">From Problem to Solution</h3>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  A structured, user-centered approach that ensures every design decision is backed by research and
                  validated through testing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {designProcess.map((process, index) => (
                  <motion.div
                    key={process.phase}
                    className="text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`w-20 h-20 ${process.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <process.icon className={`h-10 w-10 ${process.color}`} />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{process.phase}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>

                    {/* Connection Arrow */}
                    {index < designProcess.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-0">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Collaboration Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-3xl font-bold mb-4">Collaboration & Leadership</h3>
                <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                  Strong communication and collaboration skills essential for working with cross-functional teams and
                  stakeholders.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collaborationSkills.map((skill, index) => (
                  <motion.div
                    key={skill.skill}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mb-4">
                      <div className="text-lg font-semibold mb-2">{skill.skill}</div>
                      <div className="text-3xl font-bold text-blue-200 mb-2">{skill.level}%</div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-300 to-white h-3 rounded-full shadow-sm"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                  I believe great design happens through collaboration. I work closely with product managers, engineers,
                  and stakeholders to ensure designs are not only beautiful but also feasible and aligned with business
                  goals.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
