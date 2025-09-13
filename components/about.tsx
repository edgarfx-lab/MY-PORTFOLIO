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
  Rocket,
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
      color: "from-midnight-100 to-midnight-200 text-midnight-800",
      glowColor: "glow-midnight",
    },
    {
      label: "Projects Completed",
      value: "15+",
      icon: Target,
      description: "Successful client outcomes",
      color: "from-coral-100 to-coral-200 text-coral-800",
      glowColor: "glow-coral",
    },
    {
      label: "Certifications",
      value: "3",
      icon: Award,
      description: "Professional credentials",
      color: "from-sage-100 to-sage-200 text-sage-800",
      glowColor: "glow-sage",
    },
    {
      label: "Client Satisfaction",
      value: "100%",
      icon: TrendingUp,
      description: "Happy clients & results",
      color: "from-golden-100 to-golden-200 text-golden-800",
      glowColor: "glow-golden",
    },
  ]

  const designPrinciples = [
    {
      icon: Heart,
      title: "Human-Centered Design",
      description:
        "Every design decision starts with deep empathy for users. I believe in creating experiences that genuinely solve problems and improve lives through thoughtful, accessible design that puts people first.",
      color: "from-coral-50 to-coral-100",
      iconColor: "text-coral-600",
      borderColor: "border-coral-200",
    },
    {
      icon: Brain,
      title: "Strategic Innovation",
      description:
        "Design isn't just about aesthetics—it's about solving complex problems strategically. I approach each project with analytical thinking, balancing user needs with business objectives and market realities.",
      color: "from-midnight-50 to-midnight-100",
      iconColor: "text-midnight-600",
      borderColor: "border-midnight-200",
    },
    {
      icon: Eye,
      title: "Obsessive Attention to Detail",
      description:
        "The magic lives in the details. From micro-interactions to color psychology, typography to spacing, I obsess over every element to create cohesive, polished experiences that feel effortless.",
      color: "from-sage-50 to-sage-100",
      iconColor: "text-sage-600",
      borderColor: "border-sage-200",
    },
    {
      icon: Rocket,
      title: "Continuous Innovation",
      description:
        "The design landscape evolves rapidly. I stay ahead by embracing emerging technologies, new methodologies, and design trends while maintaining timeless principles that ensure longevity.",
      color: "from-golden-50 to-golden-100",
      iconColor: "text-golden-600",
      borderColor: "border-golden-200",
    },
  ]

  const skillCategories = {
    design: {
      title: "Design Mastery",
      icon: Palette,
      skills: ["UI/UX Design", "Figma Expert", "Wireframing", "Prototyping", "Design Systems", "Visual Design"],
      color: "from-midnight-600 to-midnight-700",
      bgColor: "from-midnight-50 to-midnight-100",
    },
    research: {
      title: "Research & Strategy",
      icon: Lightbulb,
      skills: ["User Research", "Usability Testing", "User Flows", "Personas", "Journey Mapping", "A/B Testing"],
      color: "from-coral-600 to-coral-700",
      bgColor: "from-coral-50 to-coral-100",
    },
    collaboration: {
      title: "Leadership & Collaboration",
      icon: Users,
      skills: [
        "Creative Leadership",
        "Cross-functional Teams",
        "Client Communication",
        "Design Mentoring",
        "Agile Methodology",
        "Stakeholder Management",
      ],
      color: "from-sage-600 to-sage-700",
      bgColor: "from-sage-50 to-sage-100",
    },
  }

  return (
    <section ref={ref} id="about" className="section-padding section-bg-midnight relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <Badge className="glass-midnight px-8 py-4 text-midnight-800 border-midnight-300/50 mb-8 text-base font-bold">
            About Me
          </Badge>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-midnight mb-10">
            Crafting Digital Experiences
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-midnight-400 via-coral-400 to-sage-400 mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl sm:text-3xl text-midnight-700 max-w-5xl mx-auto leading-relaxed font-medium">
            From strategic brand thinking to exceptional user experience design, I create meaningful digital solutions
            that bridge business goals with human needs
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-28"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.08, y: -10 }}
              className="group"
            >
              <Card
                className={`card-premium card-hover bg-gradient-to-br ${stat.color} border-2 ${stat.glowColor} hover:${stat.glowColor}`}
              >
                <CardContent className="p-8 sm:p-10 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/90 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-white transition-colors shadow-xl group-hover:scale-110 transition-transform">
                    <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-current" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold mb-4">{stat.value}</div>
                  <div className="text-lg sm:text-xl font-bold mb-3">{stat.label}</div>
                  <div className="text-sm opacity-80 font-medium">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center mb-28">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <h3 className="text-4xl sm:text-5xl font-bold text-midnight-900">My Design Journey</h3>
              <div className="w-24 h-2 bg-gradient-to-r from-coral-500 to-sage-500 rounded-full"></div>
            </div>

            <div className="space-y-8 text-midnight-700 leading-relaxed">
              <p className="text-xl sm:text-2xl">
                My journey began as a{" "}
                <strong className="text-gradient-coral">Graphic Designer & Brand Manager at JAYDEE X</strong>{" "}
                (2023-2024), where I discovered the transformative power of user-centered design. I revolutionized brand
                websites through strategic layout optimization and intuitive navigation, applying UX principles to
                create meaningful connections between brands and their audiences.
              </p>

              <p className="text-xl sm:text-2xl">
                Now as a <strong className="text-gradient-midnight">freelance UI/UX Designer</strong> (2025-Present), I
                specialize in creating digital products that solve real-world problems. From responsive e-commerce
                platforms to complex financial interfaces, I prioritize accessibility, usability, and aesthetic
                excellence in every project I undertake.
              </p>

              <p className="text-xl sm:text-2xl">
                My unique background in brand management provides a strategic perspective that many designers lack. I
                understand how design systems and user experiences can amplify business objectives while creating
                delightful, memorable interactions that users genuinely love and remember.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Brand Strategy", "UX Research", "Design Systems", "Accessibility", "User Psychology"].map(
                (skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <Badge className="bg-midnight-100 text-midnight-800 px-5 py-3 text-base font-bold border border-midnight-200 hover:bg-midnight-200 transition-colors">
                      {skill}
                    </Badge>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <Card className="card-premium bg-gradient-to-br from-sage-50 to-midnight-50 border-2 border-sage-200/60 shadow-2xl glow-sage">
              <CardContent className="p-10 sm:p-14">
                <div className="text-center mb-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-coral-500 to-sage-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-3xl sm:text-4xl font-bold text-midnight-900 mb-6">Design Philosophy</h4>
                </div>

                <blockquote className="text-midnight-700 text-xl sm:text-2xl italic text-center leading-relaxed mb-10 font-medium">
                  "Exceptional design is invisible—it solves problems so elegantly that users don't notice the
                  complexity behind the simplicity. It's the perfect harmony of form, function, and human emotion."
                </blockquote>

                <div className="grid grid-cols-3 gap-8 text-center">
                  {[
                    { emoji: "🔍", label: "Research", desc: "Deep user insights" },
                    { emoji: "🎨", label: "Design", desc: "Creative solutions" },
                    { emoji: "🚀", label: "Impact", desc: "Measurable results" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.08, y: -8 }}
                      className="space-y-4"
                    >
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                        <span className="text-3xl">{item.emoji}</span>
                      </div>
                      <div className="text-lg font-bold text-midnight-900">{item.label}</div>
                      <div className="text-sm text-midnight-600 font-medium">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-28"
        >
          <div className="text-center mb-20">
            <h3 className="text-4xl sm:text-5xl font-bold text-midnight-900 mb-8">Core Design Principles</h3>
            <p className="text-xl sm:text-2xl text-midnight-700 max-w-4xl mx-auto">
              The fundamental beliefs that guide every design decision and creative solution I develop
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card
                  className={`card-premium card-hover bg-gradient-to-br ${principle.color} border-2 ${principle.borderColor} h-full`}
                >
                  <CardContent className="p-8 sm:p-10 text-center">
                    <div className="w-24 h-24 bg-white/95 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-115 transition-transform shadow-xl">
                      <principle.icon className={`w-12 h-12 ${principle.iconColor}`} />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-midnight-900 mb-6">{principle.title}</h4>
                    <p className="text-midnight-700 leading-relaxed text-base">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <div className="text-center mb-20">
            <h3 className="text-4xl sm:text-5xl font-bold text-midnight-900 mb-8">Skills & Expertise</h3>
            <p className="text-xl sm:text-2xl text-midnight-700 max-w-4xl mx-auto">
              A comprehensive toolkit for creating exceptional digital experiences that drive measurable results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 1.1 + categoryIndex * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                <Card
                  className={`card-premium h-full border-2 border-midnight-200/60 bg-gradient-to-br ${category.bgColor}`}
                >
                  <CardContent className="p-10">
                    <div className="flex items-center gap-5 mb-10">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-xl`}
                      >
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-midnight-900">{category.title}</h4>
                    </div>
                    <div className="space-y-5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -30 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                          transition={{ duration: 0.5, delay: 1.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center gap-4 group"
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-coral-500 to-sage-500 rounded-full group-hover:scale-125 transition-transform"></div>
                          <span className="text-midnight-700 font-semibold text-lg group-hover:text-midnight-900 transition-colors">
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
