"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUp,
  Download,
  Eye,
  Coffee,
  Heart,
  Linkedin,
  Twitter,
  Github,
  Dribbble,
  Star,
  Zap,
} from "lucide-react"

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

const services = ["UI/UX Design", "User Research", "Design Systems", "Prototyping", "Usability Testing", "Brand Design"]

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin, color: "hover:text-blue-600" },
  { name: "Twitter", href: "#", icon: Twitter, color: "hover:text-sky-500" },
  { name: "GitHub", href: "#", icon: Github, color: "hover:text-slate-900" },
  { name: "Dribbble", href: "#", icon: Dribbble, color: "hover:text-pink-500" },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100
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
    <footer className="bg-gradient-to-br from-slate-900 via-navy-800 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-navy-400/20 to-teal-400/20 rounded-full blur-3xl"
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
        {/* Enhanced Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Enhanced Brand & Contact */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Enhanced Logo */}
                <div className="flex items-center space-x-4 mb-8">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <span className="text-white font-bold text-2xl">EM</span>
                    </div>
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-br from-navy-400 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-20 blur"
                      whileHover={{ opacity: 0.3 }}
                    />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold">Edgar Kgope Mahlare</div>
                    <div className="text-slate-300 font-semibold">UI/UX Designer & Creative Strategist</div>
                  </div>
                </div>

                <p className="text-slate-200 text-xl leading-relaxed mb-10 max-w-2xl">
                  Results-driven UI/UX Designer passionate about creating meaningful digital experiences through
                  user-centered design. Let's collaborate to bring your ideas to life and drive measurable results.
                </p>

                {/* Enhanced Contact Info */}
                <div className="space-y-6">
                  {[
                    { icon: Mail, text: "kgopemahlare@gmail.com", href: "mailto:kgopemahlare@gmail.com" },
                    { icon: Phone, text: "+27 81 472 0477", href: "tel:+27814720477" },
                    { icon: MapPin, text: "Polokwane, Limpopo, South Africa" },
                    { icon: ExternalLink, text: "edgarmahlare.vercel.app", href: "https://edgarmahlare.vercel.app" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center group cursor-pointer"
                      whileHover={{ scale: 1.02, x: 8 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors shadow-lg">
                        <item.icon className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-slate-200 hover:text-white transition-colors font-medium text-lg"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-slate-200 font-medium text-lg">{item.text}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Status Badge */}
                <motion.div className="mt-10" whileHover={{ scale: 1.05 }}>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400 px-6 py-3 text-base font-semibold shadow-lg">
                    <motion.div
                      className="w-3 h-3 bg-emerald-400 rounded-full mr-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    Available for Freelance Projects
                    <Zap className="w-5 h-5 ml-3" />
                  </Badge>
                </motion.div>
              </motion.div>
            </div>

            {/* Enhanced Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Star className="w-6 h-6 text-coral-400" />
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-slate-200 hover:text-white transition-all duration-300 hover:translate-x-2 transform flex items-center group text-lg"
                      >
                        <ArrowUp className="h-4 w-4 mr-3 rotate-45 group-hover:scale-125 transition-transform text-teal-400" />
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Enhanced Services & Social */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-violet-400" />
                  Services
                </h3>
                <ul className="space-y-4 mb-10">
                  {services.map((service, index) => (
                    <motion.li
                      key={service}
                      className="text-slate-200 flex items-center text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-navy-400 to-teal-400 rounded-full mr-4"></div>
                      {service}
                    </motion.li>
                  ))}
                </ul>

                {/* Enhanced Social Links */}
                <div className="mb-10">
                  <h4 className="text-xl font-bold mb-6 text-slate-200">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-300 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="space-y-4">
                  <Button
                    onClick={handleDownloadCV}
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-400 text-slate-300 hover:bg-slate-400 hover:text-slate-900 bg-transparent py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download Resume
                  </Button>
                  <Button
                    onClick={() => handleNavClick("#projects")}
                    size="sm"
                    className="w-full bg-gradient-to-r from-navy-600 to-teal-600 hover:from-navy-700 hover:to-teal-700 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye className="mr-3 h-5 w-5" />
                    View My Work
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div
          className="border-t border-slate-700 py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center text-slate-300 text-base">
              <span>© 2024 Edgar Kgope Mahlare. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="h-5 w-5 text-red-400 mx-2" />
              </motion.div>
              <span>and</span>
              <Coffee className="h-5 w-5 text-amber-400 mx-2" />
              <span>in South Africa</span>
            </div>

            <div className="flex items-center space-x-8 text-base text-slate-300">
              <motion.button
                onClick={scrollToTop}
                className="flex items-center hover:text-white transition-colors group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Back to Top
              </motion.button>

              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-3 h-3 bg-emerald-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span className="font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
