"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileCode, Palette, Code, Layout, Layers, Smartphone } from "lucide-react"
import { CheckCircle } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechVision Inc.",
    content:
      "Jaydee Edgar Creators transformed our brand identity with their exceptional graphic design and web development services. Their team's creativity and attention to detail exceeded our expectations.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Innovate Solutions",
    content:
      "The web solutions provided by Jaydee Edgar Creators have revolutionized our online presence. Their expertise in both design and development is unmatched in the industry.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Brand Forward",
    content:
      "Working with Jaydee Edgar Creators on our advertising campaign was a game-changer. Their team delivered stunning visuals and effective messaging that resonated with our audience.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVisible, setCursorVisible] = useState(false)

  useEffect(() => {
    // Only access window in useEffect (client-side only)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Mouse tracking for cursor animation
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!cursorVisible) setCursorVisible(true)
    }

    const handleMouseLeave = () => {
      setCursorVisible(false)
    }

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    document.getElementById("testimonials")?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("mousemove", handleMouseMove)
      document.getElementById("testimonials")?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorVisible])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Default to showing all testimonials, and only show one on mobile
  const visibleTestimonials = isMobile ? [testimonials[currentIndex]] : testimonials

  return (
    <section id="testimonials" className="py-20 bg-green-forest/20 relative overflow-hidden">
      {/* Cursor follower animation */}
      {cursorVisible && (
        <motion.div
          className="pointer-events-none fixed z-10 w-20 h-20 rounded-full bg-gradient-to-r from-green-forest/20 to-green-lime/20 blur-xl"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 150,
            mass: 0.1,
          }}
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized expertise in front-end development and UI/UX design
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-black/50 border border-green-forest h-full relative hover:border-green-mint transition-all duration-300 hover-lift">
              <CardContent className="pt-10 pb-6 px-6">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                    <FileCode className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">HTML/CSS</h3>
                <p className="text-gray-300 mb-4">
                  Creating responsive, accessible, and modern web interfaces with semantic HTML and advanced CSS
                  techniques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Responsive Design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">CSS Animations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Tailwind CSS</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-black/50 border border-green-forest h-full relative hover:border-green-mint transition-all duration-300 hover-lift">
              <CardContent className="pt-10 pb-6 px-6">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">JavaScript</h3>
                <p className="text-gray-300 mb-4">
                  Building interactive web applications with modern JavaScript frameworks and libraries.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">ES6+ Features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Data Structures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Algorithms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-black/50 border border-green-forest h-full relative hover:border-green-mint transition-all duration-300 hover-lift">
              <CardContent className="pt-10 pb-6 px-6">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                    <Layout className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">React</h3>
                <p className="text-gray-300 mb-4">
                  Developing dynamic and efficient user interfaces with React and its ecosystem.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Component Architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">State Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Hooks & Context API</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-black/50 border border-green-forest h-full relative hover:border-green-mint transition-all duration-300 hover-lift">
              <CardContent className="pt-10 pb-6 px-6">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                <p className="text-gray-300 mb-4">
                  Designing intuitive user interfaces and experiences with a focus on usability, accessibility, and
                  visual appeal.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Wireframing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">User Research</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-black/50 border border-green-forest h-full relative hover:border-green-mint transition-all duration-300 hover-lift">
              <CardContent className="pt-10 pb-6 px-6">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Design Tools</h3>
                <p className="text-gray-300 mb-4">
                  Proficient with industry-standard design tools for creating high-fidelity mockups and prototypes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Figma</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Adobe XD</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Illustrator</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-black/50 border border-green-forest h-full relative hover:border-green-mint transition-all duration-300 hover-lift">
              <CardContent className="pt-10 pb-6 px-6">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Responsive Web</h3>
                <p className="text-gray-300 mb-4">
                  Creating websites that work seamlessly across all devices and screen sizes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Mobile-First Design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Cross-Browser Compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Performance Optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
