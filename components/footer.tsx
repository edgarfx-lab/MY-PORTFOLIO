"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, ExternalLink, ArrowUp, Download, Eye, Coffee, Heart } from "lucide-react"

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

const services = ["UI/UX Design", "User Research", "Design Systems", "Prototyping", "Usability Testing", "Brand Design"]

export default function Footer() {
  const handleNavClick = (href: string) => {
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/edgar-mahlare-cv.html"
    link.download = "Edgar-Kgope-Mahlare-CV.html"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gradient-to-br from-brown-900 via-brown-800 to-brown-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh opacity-10"></div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brown-400 to-brown-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">EM</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Edgar Kgope Mahlare</div>
                    <div className="text-brown-300 font-medium">UI/UX Designer</div>
                  </div>
                </div>

                <p className="text-brown-200 text-lg leading-relaxed mb-8 max-w-lg">
                  Results-driven UI/UX Designer passionate about creating meaningful digital experiences through
                  user-centered design. Let's collaborate to bring your ideas to life.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-brown-400 mr-3" />
                    <a
                      href="mailto:kgopemahlare@gmail.com"
                      className="text-brown-200 hover:text-white transition-colors"
                    >
                      kgopemahlare@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-brown-400 mr-3" />
                    <a href="tel:+27814720477" className="text-brown-200 hover:text-white transition-colors">
                      +27 81 472 0477
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-brown-400 mr-3" />
                    <span className="text-brown-200">Polokwane, Limpopo, South Africa</span>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className="h-5 w-5 text-brown-400 mr-3" />
                    <a
                      href="https://edgarmahlare.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brown-200 hover:text-white transition-colors"
                    >
                      edgarmahlare.vercel.app
                    </a>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-6">
                  <Badge className="bg-green-500/20 text-green-300 border-green-400 px-4 py-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Available for Freelance Projects
                  </Badge>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-brown-200 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center group"
                      >
                        <ArrowUp className="h-4 w-4 mr-2 rotate-45 group-hover:scale-110 transition-transform" />
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6">Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="text-brown-200 flex items-center">
                      <div className="w-2 h-2 bg-brown-400 rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <Button
                    onClick={handleDownloadCV}
                    variant="outline"
                    size="sm"
                    className="w-full border-brown-400 text-brown-300 hover:bg-brown-400 hover:text-brown-900 bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button
                    onClick={() => handleNavClick("#projects")}
                    size="sm"
                    className="w-full bg-gradient-to-r from-brown-500 to-brown-600 hover:from-brown-400 hover:to-brown-500"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View My Work
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-brown-700 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-brown-300 text-sm">
              <span>© 2024 Edgar Kgope Mahlare. Made with</span>
              <Heart className="h-4 w-4 text-red-400 mx-1 animate-pulse" />
              <span>and</span>
              <Coffee className="h-4 w-4 text-yellow-400 mx-1" />
              <span>in South Africa</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-brown-300">
              <button onClick={scrollToTop} className="flex items-center hover:text-white transition-colors group">
                <ArrowUp className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
                Back to Top
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
