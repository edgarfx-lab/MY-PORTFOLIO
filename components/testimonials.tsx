"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Fashion Forward Co.",
      image: "/professional-woman-smiling.png",
      rating: 5,
      text: "Edgar transformed our clothing brand's online presence with a stunning responsive promotional site. His attention to aesthetic design principles while ensuring practical usability was exactly what we needed. The customer engagement increased by 40% after the redesign.",
      project: "Clothing Brand Website",
      skills: ["Responsive Design", "Brand Identity", "User Experience"],
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "JAYDEE X",
      image: "/professional-asian-man.png",
      rating: 5,
      text: "Working with Edgar as our Graphic Designer & Brand Manager was fantastic. He improved our website's user experience through optimized layouts and navigation, and created compelling visual campaigns that strengthened our online presence. His UX principles approach made a real difference.",
      project: "Brand Website Optimization",
      skills: ["UX Principles", "Visual Design", "Brand Management"],
    },
    {
      name: "Lisa Rodriguez",
      role: "Startup Founder",
      company: "TechStart Solutions",
      image: "/professional-latina-woman.png",
      rating: 5,
      text: "Edgar's work on our product showcase was exceptional. He created dynamic visuals with smooth user interactions that perfectly captured our brand essence. His design systems and style guides helped maintain consistency across all our digital touchpoints.",
      project: "Product Showcase Platform",
      skills: ["Design Systems", "Interactive Design", "Visual Assets"],
    },
    {
      name: "David Thompson",
      role: "UX Research Lead",
      company: "Design Collective",
      image: "/professional-black-man-smiling.png",
      rating: 5,
      text: "Edgar's approach to user research and usability testing is thorough and insightful. His work on banking interface redesigns showed real understanding of user personas and journey mapping. The prototypes he delivered were both high-fidelity and highly functional.",
      project: "Banking Interface Redesign",
      skills: ["User Research", "Prototyping", "Usability Testing"],
    },
    {
      name: "Jennifer Kim",
      role: "Creative Director",
      company: "Digital Agency Pro",
      image: "/professional-korean-woman.png",
      rating: 5,
      text: "Edgar's design thinking and problem-solving skills are impressive. He streamlined our client onboarding process through competitor analysis and interactive prototyping. The improved form designs and progress indicators reduced drop-off rates by 35%.",
      project: "Onboarding Flow Optimization",
      skills: ["Wireframing", "Form Design", "Competitor Analysis"],
    },
    {
      name: "Robert Wilson",
      role: "Business Owner",
      company: "Local Business Hub",
      image: "/professional-white-man-with-beard.png",
      rating: 5,
      text: "Edgar's collaborative approach and communication skills made our project smooth from start to finish. His adaptability and creative thinking helped us solve complex design challenges. The accessibility standards he implemented exceeded our expectations.",
      project: "Business Website Redesign",
      skills: ["Accessibility", "Collaboration", "Creative Thinking"],
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What clients say about working with me on their design projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow relative">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-blue-200">
                    <Quote className="w-8 h-8" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  {/* Project Info */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-blue-600 mb-2">Project: {testimonial.project}</div>
                    <div className="flex flex-wrap gap-1">
                      {testimonial.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Happy Clients", value: "15+" },
              { label: "Projects Completed", value: "20+" },
              { label: "Average Rating", value: "5.0" },
              { label: "Response Time", value: "24h" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Join these satisfied clients and let's create something amazing together. I'm committed to delivering
                exceptional design solutions that exceed expectations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
