"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, ArrowRight, Users, Target, Zap, Github, Play, Award, TrendingUp, Mail, User } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  const featuredProject = {
    title: "Nedbank Mobile Banking Redesign",
    subtitle: "Complete UX Transformation",
    description:
      "A comprehensive redesign of the mobile banking experience, focusing on improving fund transfer flows and overall usability through extensive user research and iterative design processes.",
    longDescription:
      "This project involved a complete overhaul of Nedbank's mobile banking interface, addressing critical user pain points identified through comprehensive research. The redesign focused on simplifying complex financial tasks, improving accessibility, and creating a more intuitive user journey.",
    image: "/nedbank-dashboard-screenshot.jpeg",
    liveUrl: "https://v0-nedbank-mobile-banking-redesign.vercel.app/dashboard",
    githubUrl: "#",
    category: "FinTech",
    timeline: "3 months",
    role: "Lead UX Designer",
    team: "4 members",
    impact: "89% task completion improvement",
    skills: ["User Research", "Prototyping", "Usability Testing", "Journey Mapping", "Figma", "Accessibility"],
    process: [
      {
        phase: "Research",
        description: "Conducted user interviews and analyzed existing pain points",
        icon: Users,
        duration: "4 weeks",
      },
      {
        phase: "Design",
        description: "Created wireframes, prototypes, and high-fidelity designs",
        icon: Target,
        duration: "6 weeks",
      },
      {
        phase: "Test",
        description: "Performed usability testing and iterated based on feedback",
        icon: Zap,
        duration: "2 weeks",
      },
    ],
    results: [
      { metric: "Task Completion Rate", value: "89%", improvement: "+45%" },
      { metric: "User Satisfaction", value: "4.8/5", improvement: "+1.2" },
      { metric: "Error Rate", value: "2.1%", improvement: "-67%" },
      { metric: "Time on Task", value: "45s", improvement: "-60%" },
    ],
    testimonial: {
      text: "Edgar's redesign transformed our mobile banking experience. The user feedback has been overwhelmingly positive.",
      author: "Sarah Johnson",
      role: "Product Manager, Nedbank",
    },
  }

  const otherProjects = [
    {
      title: "Tymebank Onboarding Flow",
      description:
        "Streamlined the user onboarding process through competitor analysis and interactive prototyping, resulting in improved conversion rates.",
      image: "/placeholder.svg?height=300&width=400&text=Tymebank+Onboarding+Flow",
      category: "FinTech",
      skills: ["Wireframing", "Prototyping", "Form Design", "User Flow"],
      impact: "35% reduction in drop-off rate",
      metrics: ["35% drop-off reduction", "50% faster completion", "25% higher satisfaction"],
      color: "from-teal-100 to-teal-200",
    },
    {
      title: "JAYDEE X Brand Website",
      description:
        "Redesigned the brand website with optimized layouts and navigation, applying UX principles to align branding with user needs.",
      image: "/placeholder.svg?height=300&width=400&text=JAYDEE+X+Website",
      category: "Brand Design",
      skills: ["Brand Design", "UX Principles", "Visual Design", "Responsive Design"],
      impact: "40% increase in engagement",
      metrics: ["40% engagement boost", "65% longer sessions", "45% lower bounce rate"],
      color: "from-coral-100 to-coral-200",
    },
    {
      title: "E-commerce Fashion Platform",
      description:
        "Created a dynamic product showcase with engaging visuals and smooth user interactions for a fashion brand.",
      image: "/placeholder.svg?height=300&width=400&text=Fashion+E-commerce",
      category: "E-commerce",
      skills: ["Product Design", "Interactive Design", "Visual Assets", "Brand Identity"],
      impact: "Enhanced brand presence",
      metrics: ["40% conversion increase", "25% higher AOV", "55% cart completion"],
      color: "from-violet-100 to-violet-200",
    },
    {
      title: "Healthcare Dashboard",
      description:
        "Designed an intuitive dashboard for healthcare professionals to manage patient data and appointments efficiently.",
      image: "/placeholder.svg?height=300&width=400&text=Healthcare+Dashboard",
      category: "Healthcare",
      skills: ["Dashboard Design", "Data Visualization", "User Research", "Accessibility"],
      impact: "Improved workflow efficiency",
      metrics: ["60% faster data entry", "40% fewer errors", "90% user satisfaction"],
      color: "from-emerald-100 to-emerald-200",
    },
    {
      title: "EdTech Learning Platform",
      description:
        "Developed a comprehensive learning management system with focus on student engagement and teacher productivity.",
      image: "/placeholder.svg?height=300&width=400&text=EdTech+Platform",
      category: "Education",
      skills: ["UX Research", "Information Architecture", "Interaction Design", "Mobile Design"],
      impact: "Enhanced learning outcomes",
      metrics: ["70% completion rate", "85% student satisfaction", "50% teacher efficiency"],
      color: "from-amber-100 to-amber-200",
    },
    {
      title: "Real Estate App",
      description:
        "Created a mobile-first property search and management application with advanced filtering and virtual tours.",
      image: "/placeholder.svg?height=300&width=400&text=Real+Estate+App",
      category: "Real Estate",
      skills: ["Mobile UX", "Search Design", "Map Integration", "AR/VR"],
      impact: "Streamlined property search",
      metrics: ["45% faster searches", "30% more inquiries", "80% mobile usage"],
      color: "from-navy-100 to-navy-200",
    },
  ]

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="section-padding section-bg-accent relative overflow-hidden"
      style={{ y }}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-violet-200/30 to-navy-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <Badge className="glass-violet px-8 py-4 text-violet-800 border-violet-300/50 mb-8 text-base font-semibold">
            Portfolio Showcase
          </Badge>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-accent mb-10">Featured Projects</h2>
          <div className="w-40 h-2 bg-gradient-to-r from-violet-400 via-navy-400 to-teal-400 mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl sm:text-3xl text-slate-700 max-w-5xl mx-auto leading-relaxed font-medium">
            Real-world projects showcasing user-centered design solutions and measurable impact across diverse
            industries
          </p>
        </motion.div>

        {/* Enhanced Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-32"
        >
          <Card className="glass-violet border-violet-200/50 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Enhanced Project Image */}
              <motion.div
                className="relative h-80 sm:h-96 lg:h-full min-h-[500px] bg-gradient-to-br from-violet-100 to-navy-200 group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>

                {/* Enhanced Overlay Elements */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-violet-600 text-white border-0 px-4 py-2 text-sm font-semibold">
                    Featured Project
                  </Badge>
                </div>

                <div className="absolute bottom-6 right-6 flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-white/90 text-slate-800 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="bg-white/90 border-slate-300 text-slate-800 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                {/* Project Stats Overlay */}
                <motion.div
                  className="absolute top-6 right-6 glass-navy rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                >
                  <div className="text-xs font-semibold text-navy-700 mb-1">Impact</div>
                  <div className="text-lg font-bold text-navy-800">{featuredProject.impact}</div>
                </motion.div>
              </motion.div>

              {/* Enhanced Project Details */}
              <CardContent className="p-8 sm:p-12 lg:p-16">
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <Badge className="bg-violet-100 text-violet-800 border-violet-200 px-4 py-2 mb-4">
                      {featuredProject.category}
                    </Badge>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{featuredProject.title}</h3>
                    <p className="text-xl text-violet-700 font-semibold mb-6">{featuredProject.subtitle}</p>
                    <p className="text-slate-700 leading-relaxed text-lg mb-4">{featuredProject.description}</p>
                    <p className="text-slate-600 leading-relaxed">{featuredProject.longDescription}</p>
                  </div>

                  {/* Enhanced Project Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-slate-200/50">
                    {[
                      { label: "Timeline", value: featuredProject.timeline },
                      { label: "Role", value: featuredProject.role },
                      { label: "Team", value: featuredProject.team },
                      { label: "Impact", value: "89%" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center group cursor-pointer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-violet-700 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Design Process */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-3 text-xl">
                      <Award className="w-6 h-6 text-violet-600" />
                      Design Process
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {featuredProject.process.map((step, index) => (
                        <motion.div
                          key={step.phase}
                          className="text-center group cursor-pointer"
                          whileHover={{ scale: 1.05, y: -5 }}
                          initial={{ opacity: 0, y: 30 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-navy-100 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <step.icon className="w-8 h-8 text-violet-600" />
                          </div>
                          <div className="text-lg font-bold text-slate-900 mb-2">{step.phase}</div>
                          <div className="text-sm text-slate-600 mb-2">{step.description}</div>
                          <div className="text-xs text-violet-600 font-semibold">{step.duration}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Results */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-3 text-xl">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                      Key Results
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {featuredProject.results.map((result, index) => (
                        <motion.div
                          key={result.metric}
                          className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/50 group hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.02, y: -2 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                        >
                          <div className="text-2xl font-bold text-emerald-700 mb-1">{result.value}</div>
                          <div className="text-sm text-emerald-600 font-medium mb-1">{result.metric}</div>
                          <div className="text-xs text-emerald-500 font-semibold">{result.improvement}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {featuredProject.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.4, delay: 1.1 + index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge className="bg-white/90 text-slate-800 border-slate-200 px-4 py-2 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      asChild
                      className="btn-primary flex-1 text-lg py-4 shadow-xl hover:shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="w-5 h-5 mr-3" />
                        View Live Project
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="btn-secondary flex-1 bg-transparent text-lg py-4 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a href="#contact">
                        <ArrowRight className="w-5 h-5 mr-3" />
                        Discuss Project
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Enhanced Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">Other Projects</h3>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Additional work showcasing diverse design challenges and innovative solutions across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <Card
                  className={`card-premium card-hover h-full bg-gradient-to-br ${project.color}/30 border-2 border-slate-200/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500`}
                >
                  {/* Enhanced Project Image */}
                  <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent group-hover:from-slate-900/40 transition-all duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-700 border-0 text-xs font-semibold px-3 py-1 shadow-md">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <Button
                        size="sm"
                        className="bg-white/90 text-slate-800 hover:bg-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </motion.div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Project Title & Description */}
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-navy-700 transition-colors leading-tight mb-3">
                          {project.title}
                        </h4>
                        <p className="text-slate-700 leading-relaxed text-sm mb-4">{project.description}</p>
                      </div>

                      {/* Impact Highlight */}
                      {project.impact && (
                        <motion.div
                          className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-bold text-emerald-800">Key Impact</span>
                          </div>
                          <div className="text-base font-bold text-emerald-700">{project.impact}</div>
                        </motion.div>
                      )}

                      {/* Metrics */}
                      {project.metrics && (
                        <div>
                          <h6 className="text-sm font-bold text-slate-900 mb-3">Success Metrics:</h6>
                          <div className="space-y-2">
                            {project.metrics.map((metric, metricIndex) => (
                              <motion.div
                                key={metricIndex}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={hoveredProject === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                                transition={{ delay: metricIndex * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-navy-500 to-teal-500 rounded-full"></div>
                                <span className="text-xs text-slate-700 font-medium">{metric}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Skills */}
                      <div>
                        <h6 className="text-sm font-bold text-slate-900 mb-3">Technologies Used:</h6>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                hoveredProject === index ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.9 }
                              }
                              transition={{ delay: skillIndex * 0.05 }}
                            >
                              <Badge
                                variant="outline"
                                className="text-xs border-slate-300 text-slate-700 bg-white/70 hover:bg-white transition-colors"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* View Case Study Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-slate-600 hover:text-navy-800 hover:bg-slate-100/80 group/btn transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="flex items-center justify-center">
                          View Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-20"
        >
          <Card className="card-premium bg-gradient-to-br from-slate-50 to-violet-50 border-2 border-violet-200/50 max-w-4xl mx-auto shadow-2xl">
            <CardContent className="p-12 sm:p-16">
              <motion.div className="space-y-8" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-navy-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                  <Zap className="w-10 h-10 text-white" />
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                    Ready to Start Your Next Project?
                  </h3>
                  <p className="text-xl text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Let's collaborate to create exceptional user experiences that drive results for your business. From
                    concept to launch, I'll help bring your vision to life.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    onClick={() => {
                      const element = document.getElementById("contact")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Get In Touch
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>

                  <Button
                    onClick={() => {
                      const element = document.getElementById("about")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    variant="outline"
                    className="btn-secondary bg-transparent text-lg px-8 py-4 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <User className="w-5 h-5 mr-3" />
                    Learn More About Me
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 border-t border-slate-200/50">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    {[
                      { label: "Projects Delivered", value: "15+" },
                      { label: "Client Satisfaction", value: "100%" },
                      { label: "Avg. Response Time", value: "24h" },
                      { label: "Years Experience", value: "2+" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="cursor-pointer"
                      >
                        <div className="text-2xl sm:text-3xl font-bold text-violet-600 mb-2">{stat.value}</div>
                        <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
