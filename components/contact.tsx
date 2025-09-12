"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, ExternalLink, MessageCircle, CheckCircle } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
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
    }, 3000)
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
    },
    {
      icon: Mail,
      label: "Email",
      value: "kgopemahlare@gmail.com",
      href: "mailto:kgopemahlare@gmail.com",
      description: "Response within 24 hours",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Polokwane, Limpopo, SA",
      description: "Remote work available globally",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      value: "edgarmahlare.vercel.app",
      href: "https://edgarmahlare.vercel.app",
      description: "View my complete work",
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
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      status: "Remote Ready",
      description: "Experienced in remote collaboration",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      status: "Quick Response",
      description: "Typical response time: 24 hours",
      color: "bg-purple-100 text-purple-800 border-purple-300",
    },
  ]

  return (
    <section
      ref={ref}
      id="contact"
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
          <Badge className="glass-brown px-4 py-2 text-brown-800 border-brown-300/50 mb-4">Let's Connect</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mb-6">Ready to Work Together?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brown-400 to-brown-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and create exceptional user experiences that drive results
          </p>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {availability.map((item, index) => (
            <Badge key={item.status} className={`${item.color} px-4 py-2 text-sm font-medium`}>
              <div className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse"></div>
              {item.status}
            </Badge>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brown-900 mb-6">Get In Touch</h3>
              <p className="text-brown-700 leading-relaxed mb-8 text-base sm:text-lg">
                I'm currently available for freelance projects and would love to hear about your design challenges.
                Whether you need a complete redesign, user research, or design system development, I'm here to help
                create meaningful digital experiences.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  <Card className="glass-brown border-brown-200/50 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brown-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brown-200 transition-colors">
                          <info.icon className="w-6 h-6 text-brown-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-brown-600 mb-1">{info.label}</div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-lg font-semibold text-brown-900 hover:text-brown-700 transition-colors block mb-1"
                              target={info.href.startsWith("http") ? "_blank" : undefined}
                              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-lg font-semibold text-brown-900 mb-1">{info.value}</div>
                          )}
                          <div className="text-sm text-brown-600">{info.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Process Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="glass-brown border-brown-200/50 bg-gradient-to-br from-brown-100/50 to-brown-200/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-brown-600" />
                    <h4 className="text-lg font-bold text-brown-900">What Happens Next?</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "I'll review your message within 24 hours",
                      "We'll schedule a discovery call to discuss your needs",
                      "I'll provide a detailed proposal with timeline and pricing",
                      "We'll kick off your project with clear milestones",
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-brown-700 text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-brown border-brown-200/50 shadow-2xl">
              <CardContent className="p-6 sm:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-brown-900 mb-2">Thank You!</h3>
                    <p className="text-brown-700">
                      Your message has been sent successfully. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <MessageCircle className="w-8 h-8 text-brown-600" />
                      <h3 className="text-2xl font-bold text-brown-900">Start Your Project</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-brown-800 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-brown-300 focus:border-brown-500 focus:ring-brown-500 rounded-xl bg-white/80"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-brown-800 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-brown-300 focus:border-brown-500 focus:ring-brown-500 rounded-xl bg-white/80"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-brown-800 mb-2">
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="border-brown-300 focus:border-brown-500 focus:ring-brown-500 rounded-xl bg-white/80"
                          placeholder="Your company name"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-semibold text-brown-800 mb-2">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-brown-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white/80"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-semibold text-brown-800 mb-2">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-brown-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500 bg-white/80"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-brown-800 mb-2">
                          Project Timeline
                        </label>
                        <Input
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="border-brown-300 focus:border-brown-500 focus:ring-brown-500 rounded-xl bg-white/80"
                          placeholder="e.g., 2-3 months, ASAP, Flexible"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-brown-800 mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="border-brown-300 focus:border-brown-500 focus:ring-brown-500 rounded-xl bg-white/80 resize-none"
                          placeholder="Tell me about your project goals, target audience, specific requirements, and any challenges you're facing..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary py-4 text-lg font-semibold group"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                            Send Project Details
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-brown-200/50 text-center">
                      <p className="text-sm text-brown-600">
                        Prefer email? Reach out directly at{" "}
                        <a
                          href="mailto:kgopemahlare@gmail.com"
                          className="text-brown-800 hover:text-brown-900 font-semibold transition-colors"
                        >
                          kgopemahlare@gmail.com
                        </a>
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
