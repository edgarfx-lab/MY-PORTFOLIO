"use client"

import { motion } from "framer-motion"
import { Brain, Palette, Globe, Code, Megaphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "AI Creations",
    description: "Cutting-edge AI solutions for content generation, image creation, and data analysis.",
    icon: Brain,
  },
  {
    title: "Graphic Design",
    description: "Logos, branding, and advertisements that capture your brand's essence.",
    icon: Palette,
  },
  {
    title: "Web Design & Development",
    description: "Beautiful, responsive websites that engage your audience and drive conversions.",
    icon: Globe,
  },
  {
    title: "Coding & IT Specialization",
    description: "Custom software solutions and technical expertise for your business needs.",
    icon: Code,
  },
  {
    title: "Advertising Services",
    description: "Posters, video billboards, social media ads, and TV commercials that get noticed.",
    icon: Megaphone,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-green-forest/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of creative services to help your business stand out.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border border-green-forest hover:border-green-mint transition-all duration-300 h-full hover-lift">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardContent className="p-0 pt-4">
                    <CardDescription className="text-gray-400 text-base">{service.description}</CardDescription>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
