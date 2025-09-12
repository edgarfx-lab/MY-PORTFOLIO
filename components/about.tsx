"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Target,
  Lightbulb,
  Users,
  Heart,
  Zap,
  Award,
  TrendingUp,
  Palette,
  Brain,
  Eye,
  Compass,
} from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      label: "Years Experience",
      value: "2+",
      icon: User,
      description: "Professional design journey",
      color: "from-navy-100 to-navy-200 text-navy-800",
    },
    {
      label: "Projects Completed",
      value: "15+",
      icon: Target,
      description: "Successful client outcomes",
      color: "from-teal-100 to-teal-200 text-teal-800",
    },
    {
      label: "Certifications",
      value: "3",
      icon: Award,
      description: "Professional credentials",
      color: "from-emerald-100 to-emerald-200 text-emerald-800",
    },
    {
      label: "Client Satisfaction",
      value: "100%",
      icon: TrendingUp,
      description: "Happy clients & results",
      color: "from-coral-100 to-coral-200 text-coral-800",
    },
  ]

  const designPrinciples = [
    {
      icon: Heart,
      title: "Human-Centered Design",
      description:
        "Every design decision starts with deep empathy for users. I believe in creating experiences that genuinely solve problems and improve lives through thoughtful, accessible design.",
      color: "from-coral-50 to-coral-100",
      iconColor: "text-coral-600",
      borderColor: "border-coral-200",
    },
    {
      icon: Brain,
      title: "Strategic Thinking",
      description:
        "Design isn't just about aesthetics—it's about solving complex problems. I approach each project with strategic thinking, balancing user needs with business objectives.",
      color: "from-navy-50 to-navy-100",
      iconColor: "text-navy-600",
      borderColor: "border-navy-200",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description:
        "The magic is in the details. From micro-interactions to color psychology, I obsess over every element to create cohesive, polished experiences.",
      color: "from-teal-50 to-teal-100",
      iconColor: "text-teal-600",
      borderColor: "border-teal-200",
    },
    {
      icon: Compass,
      title: "Continuous Innovation",
      description:
        "The design landscape evolves rapidly. I stay ahead by embracing new tools, methodologies, and trends while maintaining timeless design principles.",
      color: "from-violet-50 to-violet-100",
      iconColor: "text-violet-600",
      borderColor: "border-violet-200",
    },
  ]

  const skillCategories = {
    design: {
      title: "Design Expertise",
      icon: Palette,
      skills: ["UI/UX Design", "Figma Mastery", "Wireframing", "Prototyping", "Design Systems", "Visual Design"],
      color: "from-navy-500 to-teal-600",
    },
    research: {
      title: "Research & Strategy",
      icon: Lightbulb,
      skills: ["User Research", "Usability Testing", "User Flows", "Personas", "Journey Mapping", "A/B Testing"],
      color: "from-coral-500 to-amber-600",
    },
    collaboration: {
      title: "Collaboration & Leadership",
      icon: Users,
      skills: [
        "Creative Leadership",
        "Cross-functional Teams",
        "Client Communication",
        "Design Mentoring",
        "Agile Methodology",
        "Stakeholder Management",
      ],
      color: "from-violet-500 to-navy-600",
    },
  }

  return (
    <section ref={ref} id="about" className="section-padding section-bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-40"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="glass-navy px-6 py-3 text-navy-800 border-navy-300/50 mb-6 text-sm font-semibold">
            About Me
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-primary mb-8">
            Crafting Digital Experiences
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-navy-400 via-teal-400 to-coral-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
            From brand strategy to user experience design, I create meaningful digital solutions that bridge business
            goals with human needs
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group"
            >
              <Card className={`card-premium card-hover bg-gradient-to-br ${stat.color} border-2`}>
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors shadow-lg">
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-current" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold mb-3">{stat.value}</div>
                  <div className="text-base sm:text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm opacity-80">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">My Design Journey</h3>
              <div className="w-20 h-1.5 bg-gradient-to-r from-navy-500 to-teal-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg sm:text-xl">
                My journey began as a{" "}
                <strong className="text-navy-700">Graphic Designer & Brand Manager at JAYDEE X</strong> (2023-2024),
                where I discovered the profound impact of user-centered design. I transformed brand websites through
                strategic layout optimization and intuitive navigation, applying UX principles to create meaningful
                connections between brands and their audiences.
              </p>

              <p className="text-lg sm:text-xl">
                Now as a <strong className="text-navy-700">freelance UI/UX Designer</strong> (2025-Present), I
                specialize in creating digital products that solve real problems. From responsive e-commerce platforms
                to complex financial interfaces, I prioritize accessibility, usability, and aesthetic excellence in
                every project.
              </p>

              <p className="text-lg sm:text-xl">
                My unique background in brand management provides a strategic lens that many designers lack. I
                understand how design systems and user experiences can amplify business objectives while creating
                delightful, memorable interactions that users love.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Brand Strategy", "UX Research", "Design Systems", "Accessibility", "User Psychology"].map(
                (skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge className="bg-navy-100 text-navy-800 px-4 py-2 text-sm font-semibold border border-navy-200">
                      {skill}
                    </Badge>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <Card className="card-premium bg-gradient-to-br from-teal-50 to-navy-50 border-2 border-teal-200/50 shadow-2xl">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-navy-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Design Philosophy</h4>
                </div>

                <blockquote className="text-slate-700 text-lg sm:text-xl italic text-center leading-relaxed mb-8 font-medium">
                  "Exceptional design is invisible—it solves problems so elegantly that users don't notice the
                  complexity behind the simplicity. It's the perfect marriage of form and function."
                </blockquote>

                <div className="grid grid-cols-3 gap-6 text-center">
                  {[
                    { emoji: "🔍", label: "Research", desc: "Deep user insights" },
                    { emoji: "🎨", label: "Design", desc: "Creative solutions" },
                    { emoji: "🚀", label: "Impact", desc: "Measurable results" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="space-y-3"
                    >
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
                        <span className="text-2xl">{item.emoji}</span>
                      </div>
                      <div className="text-base font-bold text-slate-900">{item.label}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Core Design Principles</h3>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              The fundamental beliefs that guide every design decision and creative solution
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group"
              >
                <Card
                  className={`card-premium card-hover bg-gradient-to-br ${principle.color} border-2 ${principle.borderColor} h-full`}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-white/90 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <principle.icon className={`w-10 h-10 ${principle.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">{principle.title}</h4>
                    <p className="text-slate-700 leading-relaxed text-sm">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Skills & Expertise</h3>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              A comprehensive toolkit for creating exceptional digital experiences that drive results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.1 + categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="card-premium h-full border-2 border-slate-200/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{category.title}</h4>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 1.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-navy-500 to-teal-500 rounded-full group-hover:scale-125 transition-transform"></div>
                          <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
