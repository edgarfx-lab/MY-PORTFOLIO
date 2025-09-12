"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, ArrowRight, Users, Target, Zap } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProject = {
    title: "Nedbank Mobile Banking Redesign",
    description:
      "Complete UX overhaul of the mobile banking experience, focusing on improving fund transfer flows and overall usability through user-centered design principles.",
    longDescription:
      "This comprehensive redesign project involved extensive user research, persona development, and journey mapping to identify pain points in the existing banking interface. Through iterative design and usability testing, I created a more intuitive and accessible mobile banking experience.",
    image: "/nedbank-dashboard-screenshot.jpeg",
    liveUrl: "https://v0-nedbank-mobile-banking-redesign.vercel.app/dashboard",
    githubUrl: "#",
    category: "FinTech",
    timeline: "3 months",
    role: "Lead UX Designer",
    impact: "89% task completion rate improvement",
    skills: ["User Research", "Prototyping", "Usability Testing", "Journey Mapping", "Figma", "Accessibility"],
    process: [
      {
        phase: "Research",
        description: "Conducted user interviews and analyzed existing pain points",
        icon: Users,
      },
      {
        phase: "Design",
        description: "Created wireframes, prototypes, and high-fidelity designs",
        icon: Target,
      },
      {
        phase: "Test",
        description: "Performed usability testing and iterated based on feedback",
        icon: Zap,
      },
    ],
    results: [
      "89% improvement in task completion rate",
      "Reduced user friction in fund transfers",
      "Enhanced accessibility compliance",
      "Positive user feedback on new interface",
    ],
  }

  const otherProjects = [
    {
      title: "Tymebank Onboarding Flow",
      description:
        "Streamlined the user onboarding process through competitor analysis and interactive prototyping, resulting in improved conversion rates.",
      image: "/placeholder.svg?height=300&width=400&text=Tymebank+Onboarding",
      category: "FinTech",
      skills: ["Wireframing", "Prototyping", "Form Design", "User Flow"],
      impact: "35% reduction in drop-off rate",
    },
    {
      title: "JAYDEE X Brand Website",
      description:
        "Redesigned the brand website with optimized layouts and navigation, applying UX principles to align branding with user needs.",
      image: "/placeholder.svg?height=300&width=400&text=JAYDEE+X+Website",
      category: "Brand Design",
      skills: ["Brand Design", "UX Principles", "Visual Design", "Responsive Design"],
      impact: "40% increase in engagement",
    },
    {
      title: "Clothing Brand Showcase",
      description:
        "Created a dynamic product showcase with engaging visuals and smooth user interactions for a fashion brand.",
      image: "/placeholder.svg?height=300&width=400&text=Fashion+Showcase",
      category: "E-commerce",
      skills: ["Product Design", "Interactive Design", "Visual Assets", "Brand Identity"],
      impact: "Enhanced brand presence",
    },
  ]

  return (
    <section
      ref={ref}
      id="projects"
      className="section-padding bg-gradient-to-br from-brown-50/50 via-white to-brown-100/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="glass-brown px-4 py-2 text-brown-800 border-brown-300/50 mb-4">Portfolio</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brown-400 to-brown-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            Real-world projects showcasing user-centered design solutions and measurable impact
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="glass-brown border-brown-200/50 overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] bg-gradient-to-br from-brown-100 to-brown-200">
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brown-900/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-brown-600 text-white border-0">Featured Project</Badge>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button asChild size="sm" className="bg-white/90 text-brown-800 hover:bg-white">
                    <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <Badge className="bg-brown-100 text-brown-800 border-brown-200 mb-3">
                      {featuredProject.category}
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-bold text-brown-900 mb-4">{featuredProject.title}</h3>
                    <p className="text-brown-700 leading-relaxed mb-4">{featuredProject.description}</p>
                    <p className="text-brown-600 leading-relaxed">{featuredProject.longDescription}</p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-brown-200/50">
                    <div className="text-center">
                      <div className="text-lg font-bold text-brown-900">{featuredProject.timeline}</div>
                      <div className="text-sm text-brown-600">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-brown-900">{featuredProject.role}</div>
                      <div className="text-sm text-brown-600">Role</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-brown-900">89%</div>
                      <div className="text-sm text-brown-600">Success Rate</div>
                    </div>
                  </div>

                  {/* Design Process */}
                  <div>
                    <h4 className="font-semibold text-brown-900 mb-3">Design Process</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {featuredProject.process.map((step, index) => (
                        <div key={step.phase} className="text-center">
                          <div className="w-12 h-12 bg-brown-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                            <step.icon className="w-6 h-6 text-brown-600" />
                          </div>
                          <div className="text-sm font-medium text-brown-900 mb-1">{step.phase}</div>
                          <div className="text-xs text-brown-600">{step.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div>
                    <h4 className="font-semibold text-brown-900 mb-3">Skills & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.skills.map((skill) => (
                        <Badge key={skill} className="bg-brown-100/80 text-brown-800 border-brown-200 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-brown-900 mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {featuredProject.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-brown-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-brown-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button asChild className="btn-primary flex-1">
                      <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        View Live Project
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="btn-secondary flex-1 bg-transparent">
                      <a href="#contact">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Discuss Project
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brown-900 mb-4">Other Projects</h3>
            <p className="text-brown-700 max-w-2xl mx-auto">
              Additional work showcasing diverse design challenges and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="glass-brown border-brown-200/50 card-hover h-full overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-brown-100 to-brown-200">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-brown-900/10 group-hover:bg-brown-900/20 transition-colors"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-brown-600/90 text-white border-0 text-xs">{project.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-brown-900 mb-3 group-hover:text-brown-700 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-brown-700 text-sm leading-relaxed mb-4">{project.description}</p>

                    {project.impact && (
                      <div className="mb-4 p-2 bg-brown-100/50 rounded-lg border border-brown-200/50">
                        <div className="text-xs font-medium text-brown-800">Impact: {project.impact}</div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs border-brown-300 text-brown-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-brown-600 hover:text-brown-800 hover:bg-brown-100/50 group"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="glass-brown border-brown-200/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Ready to Start Your Project?</h3>
              <p className="text-brown-700 leading-relaxed mb-6">
                Let's collaborate to create exceptional user experiences that drive results for your business.
              </p>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
