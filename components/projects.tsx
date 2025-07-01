"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, CreditCard, Shield, Smartphone, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import SectionHeading from "./section-heading"

const projectFeatures = [
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Multi-layer security with biometric authentication and secure transactions",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for mobile devices with intuitive touch interactions",
  },
  {
    icon: CreditCard,
    title: "Account Management",
    description: "Comprehensive view of all accounts with real-time balance updates",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "Fast access to transfers, payments, and other banking services",
  },
]

const projectHighlights = [
  "Modern dark theme with excellent contrast",
  "Intuitive account overview with card details",
  "Quick action buttons for common tasks",
  "Real-time balance updates",
  "Responsive design for all devices",
  "Clean and professional interface",
  "Enhanced user experience",
  "Secure transaction handling",
]

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Mobile Banking UI",
  "FinTech Design",
  "Responsive Design",
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="projects" className="section-padding bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Project" subtitle="Nedbank Mobile Banking Redesign" />

        {/* Main Project Showcase */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="overflow-hidden bg-gradient-to-br from-green-900/20 to-blue-900/20 border-primary/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">FinTech • Mobile Banking</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 gradient-text">Nedbank Mobile Banking Redesign</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A complete redesign of Nedbank's mobile banking application featuring modern UI/UX principles,
                    enhanced security, and improved user experience for seamless financial management. The design
                    focuses on clarity, accessibility, and user-friendly interactions.
                  </p>
                </div>

                {/* Technology Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="hover-lift flex-1">
                    <a
                      href="https://v0-nedbank-mobile-banking-redesign.vercel.app/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="flex-1 bg-transparent">
                    <a href="https://github.com/edgarfx-lab" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                </div>

                {/* Project Status */}
                <div className="flex items-center text-green-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Project Completed</span>
                </div>
              </div>

              {/* Project Screenshot */}
              <div className="space-y-4">
                <motion.div
                  className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/nedbank-dashboard-screenshot.jpeg"
                    alt="Nedbank Mobile Banking Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
                <div className="text-center">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://v0-nedbank-mobile-banking-redesign.vercel.app/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Explore Full Application
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Project Features */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Key Features & Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectFeatures.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="text-center p-6 card-hover h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Highlights */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Project Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Design Philosophy</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The redesign focuses on creating a seamless and secure banking experience that prioritizes user needs
                  and modern design principles. Every element has been carefully crafted to ensure maximum usability and
                  accessibility.
                </p>
                <p className="text-muted-foreground">
                  The dark theme provides excellent contrast and reduces eye strain during extended use, while the clean
                  layout ensures users can quickly find and access the features they need most.
                </p>
                <div className="pt-4">
                  <Button asChild variant="outline" className="hover-lift bg-transparent">
                    <a
                      href="https://v0-nedbank-mobile-banking-redesign.vercel.app/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Smartphone className="h-4 w-4 mr-2" />
                      Experience the Design
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Interested in Similar Work?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I specialize in creating modern, user-friendly financial applications with a focus on security and
            exceptional user experience. Let's discuss your next FinTech project!
          </p>
          <Button asChild size="lg" className="hover-lift">
            <a href="#contact">
              <Zap className="h-4 w-4 mr-2" />
              Start Your Project
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
