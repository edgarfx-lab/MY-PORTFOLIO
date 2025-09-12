"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Calendar,
  Zap,
  Star,
  Globe,
  Coffee,
} from "lucide-react"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 2500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      })
    }, 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+27 81 472 0477",
      href: "tel:+27814720477",
      description: "Available Mon-Fri, 9AM-6PM SAST",
      color: "from-navy-100 to-navy-200 text-navy-800",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kgopemahlare@gmail.com",
      href: "mailto:kgopemahlare@gmail.com",
      description: "Response within 24 hours",
      color: "from-teal-100 to-teal-200 text-teal-800",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Polokwane, Limpopo, SA",
      description: "Remote work available globally",
      color: "from-coral-100 to-coral-200 text-coral-800",
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "edgarmahlare.vercel.app",
      href: "https://edgarmahlare.vercel.app",
      description: "View my complete work",
      color: "from-violet-100 to-violet-200 text-violet-800",
    },
  ]

  const projectTypes = [
    "Website Redesign",
    "Mobile App Design",
    "Design System Creation",
    "User Research & Testing",
    "Prototype Development",
    "Brand Identity Design",
    "E-commerce Platform",
    "Dashboard Design",
    "Landing Page Design",
    "Other",
  ]

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Let's discuss",
  ]

  const availability = [
    {
      status: "Available Now",
      description: "Ready to start new projects immediately",
      color: "bg-emerald-100 text-emerald-800 border-emerald-300",
      icon: CheckCircle,
    },
    {
      status: "Remote Ready",
      description: "Experienced in remote collaboration",
      color: "bg-teal-100 text-teal-800 border-teal-300",
      icon: Globe,
    },
    {
      status: "Quick Response",
      description: "Typical response time: 24 hours",
      color: "bg-violet-100 text-violet-800 border-violet-300",
      icon: Zap,
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We'll discuss your project goals, requirements, and timeline in detail",
      duration: "30-60 minutes",
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description: "I'll provide a detailed proposal with timeline, deliverables, and pricing",
      duration: "2-3 days",
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Collaborative design process with regular check-ins and feedback sessions",
      duration: "2-8 weeks",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Final delivery, launch support, and ongoing maintenance if needed",
      duration: "1-2 weeks",
    },
  ]

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="section-padding section-bg-primary relative overflow-hidden"
      style={{ y }}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 pattern-mesh opacity-30"></div>
      <motion.div
        className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-navy-200/20 to-teal-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
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
          <Badge className="glass-navy px-8 py-4 text-navy-800 border-navy-300/50 mb-8 text-base font-semibold">
            Let's Connect
          </Badge>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-primary mb-10">
            Ready to Work Together?
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-navy-400 via-teal-400 to-coral-400 mx-auto mb-10 rounded-full"></div>
          <p className="text-2xl sm:text-3xl text-slate-700 max-w-5xl mx-auto leading-relaxed font-medium">
            Let's discuss your project and create exceptional user experiences that drive meaningful results for your
            business
          </p>
        </motion.div>

        {/* Enhanced Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          {availability.map((item, index) => (
            <motion.div
              key={item.status}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <Badge
                className={`${item.color} px-6 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3`}
              >
                <item.icon className="w-5 h-5" />
                <div>
                  <div className="font-bold">{item.status}</div>
                  <div className="text-xs opacity-80">{item.description}</div>
                </div>
                <motion.div
                  className="w-3 h-3 bg-current rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Get In Touch</h3>
              <p className="text-slate-700 leading-relaxed mb-8 text-lg sm:text-xl">
                I'm currently available for freelance projects and would love to hear about your design challenges.
                Whether you need a complete redesign, user research, or design system development, I'm here to help
                create meaningful digital experiences that users love.
              </p>
            </div>

            {/* Enhanced Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="group cursor-pointer"
                >
                  <Card
                    className={`card-premium card-hover bg-gradient-to-br ${info.color} border-2 shadow-xl hover:shadow-2xl transition-all duration-300`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-white/90 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                          <info.icon className="w-8 h-8 text-current" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold opacity-80 mb-2">{info.label}</div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-xl font-bold hover:underline transition-colors block mb-2 group-hover:scale-105 transform origin-left transition-transform"
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-xl font-bold mb-2">{info.value}</div>
                          )}
                          <div className="text-sm opacity-70 font-medium">{info.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Process Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Card className="card-premium bg-gradient-to-br from-slate-50 to-navy-50 border-2 border-navy-200/50 shadow-2xl">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-xl">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">How We'll Work Together</h4>
                  </div>

                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        className="flex items-start gap-4 group hover:bg-white/50 p-4 rounded-2xl transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-navy-100 to-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                          <span className="text-navy-700 font-bold text-sm">{step.step}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-lg font-bold text-slate-900">{step.title}</h5>
                            <span className="text-xs text-slate-600 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-slate-700 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Card className="card-premium border-2 border-slate-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8 sm:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className="text-center py-16"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0],
                      }}
                      transition={{ duration: 2, repeat: 2 }}
                      className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                    >
                      <CheckCircle className="w-12 h-12 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h3>
                    <p className="text-slate-700 text-lg leading-relaxed mb-6">
                      Your message has been sent successfully. I'll get back to you within 24 hours with next steps.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-emerald-600">
                      <Coffee className="w-5 h-5" />
                      <span className="text-sm font-medium">Grab a coffee while I review your project!</span>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-navy-600 rounded-3xl flex items-center justify-center shadow-xl">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900">Start Your Project</h3>
                        <p className="text-slate-600">Let's bring your vision to life</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Enhanced Form Fields */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                          <label htmlFor="name" className="block text-sm font-bold text-slate-800 mb-3">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={`border-2 focus:border-navy-500 focus:ring-navy-500 rounded-2xl bg-white/80 py-4 text-base transition-all duration-300 ${
                              focusedField === "name" ? "shadow-lg scale-105" : ""
                            }`}
                            placeholder="Your full name"
                          />
                        </motion.div>

                        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                          <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-3">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={`border-2 focus:border-navy-500 focus:ring-navy-500 rounded-2xl bg-white/80 py-4 text-base transition-all duration-300 ${
                              focusedField === "email" ? "shadow-lg scale-105" : ""
                            }`}
                            placeholder="your@email.com"
                          />
                        </motion.div>
                      </div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="company" className="block text-sm font-bold text-slate-800 mb-3">
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className={`border-2 focus:border-navy-500 focus:ring-navy-500 rounded-2xl bg-white/80 py-4 text-base transition-all duration-300 ${
                            focusedField === "company" ? "shadow-lg scale-105" : ""
                          }`}
                          placeholder="Your company name"
                        />
                      </motion.div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <label htmlFor="projectType" className="block text-sm font-bold text-slate-800 mb-3">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("projectType")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={`w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 bg-white/80 text-base transition-all duration-300 ${
                              focusedField === "projectType" ? "shadow-lg scale-105" : ""
                            }`}
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </motion.div>

                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <label htmlFor="budget" className="block text-sm font-bold text-slate-800 mb-3">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("budget")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 bg-white/80 text-base transition-all duration-300 ${
                              focusedField === "budget" ? "shadow-lg scale-105" : ""
                            }`}
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </motion.div>
                      </div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="timeline" className="block text-sm font-bold text-slate-800 mb-3">
                          Project Timeline
                        </label>
                        <Input
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("timeline")}
                          onBlur={() => setFocusedField(null)}
                          className={`border-2 focus:border-navy-500 focus:ring-navy-500 rounded-2xl bg-white/80 py-4 text-base transition-all duration-300 ${
                            focusedField === "timeline" ? "shadow-lg scale-105" : ""
                          }`}
                          placeholder="e.g., 2-3 months, ASAP, Flexible"
                        />
                      </motion.div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="message" className="block text-sm font-bold text-slate-800 mb-3">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={6}
                          className={`border-2 focus:border-navy-500 focus:ring-navy-500 rounded-2xl bg-white/80 resize-none text-base transition-all duration-300 ${
                            focusedField === "message" ? "shadow-lg scale-105" : ""
                          }`}
                          placeholder="Tell me about your project goals, target audience, specific requirements, and any challenges you're facing. The more details you provide, the better I can help you!"
                        />
                      </motion.div>

                      {/* Enhanced Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary py-6 text-lg font-bold group shadow-2xl hover:shadow-3xl transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <motion.div
                              className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            />
                            Sending Your Message...
                          </motion.div>
                        ) : (
                          <>
                            <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Send Project Details
                            <Star className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>

                    {/* Enhanced Footer Note */}
                    <motion.div
                      className="mt-8 pt-8 border-t border-slate-200/50 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <p className="text-sm text-slate-600 mb-4">
                        Prefer email? Reach out directly at{" "}
                        <a
                          href="mailto:kgopemahlare@gmail.com"
                          className="text-navy-700 hover:text-navy-900 font-bold transition-colors hover:underline"
                        >
                          kgopemahlare@gmail.com
                        </a>
                      </p>
                      <div className="flex items-center justify-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs">Usually responds within 24 hours</span>
                      </div>
                    </motion.div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
