"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"

// Contact information
const contactInfo = {
  email: "creatorsjaydeeedgar@gmail.com",
  phone: "+27 81 472 0477",
  address: "Limpopo Polokwane South Africa",
  socialMedia: {
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "enter your name ",
    email: "enter your email ",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to start your next project? Contact us today for a free consultation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/50 border border-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Phone</h4>
                    <a href={`tel:${contactInfo.phone.replace(/\D/g, "")}`} className="text-primary hover:underline">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Location</h4>
                    <p className="text-primary">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href={contactInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:gradient-bg flex items-center justify-center transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:gradient-bg flex items-center justify-center transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:gradient-bg flex items-center justify-center transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:gradient-bg flex items-center justify-center transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-xl font-bold mb-4">Our Office</h4>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Office+Location"
                    alt="Office Location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-black/50 border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700 min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full gradient-bg hover:opacity-90 transition-opacity">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
