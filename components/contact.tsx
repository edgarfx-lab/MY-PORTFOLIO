"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import SectionHeading from "./section-heading"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="section-padding bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact Me" subtitle="Let's work together" />

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: isMobile ? 1.01 : 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Card className="card-hover">
              <CardContent className="p-6 sm:p-8">
                <motion.h3
                  className="text-2xl font-semibold mb-8 gradient-text text-center"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Get In Touch
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div className="flex items-start" variants={itemVariants} whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Mail className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-lg">Email</h4>
                        <a
                          href="mailto:kgopemahlare@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          kgopemahlare@gmail.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div className="flex items-start" variants={itemVariants} whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Phone className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-lg">Phone</h4>
                        <a
                          href="tel:+27814720477"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +27 81 472 0477
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div className="flex items-start" variants={itemVariants} whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <MapPin className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-lg">Location</h4>
                        <p className="text-muted-foreground">53A Thabo Mbeki, Polokwane, South Africa</p>
                      </div>
                    </motion.div>

                    <motion.div className="flex items-start" variants={itemVariants} whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Github className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-lg">GitHub</h4>
                        <a
                          href="https://github.com/edgarfx-lab"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          github.com/edgarfx-lab
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-10 flex flex-wrap justify-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href="https://github.com/edgarfx-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="h-7 w-7 text-primary" />
                    <span className="sr-only">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/kgope-mahlare-587b95280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="h-7 w-7 text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="mailto:kgopemahlare@gmail.com"
                    className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="h-7 w-7 text-primary" />
                    <span className="sr-only">Email</span>
                  </motion.a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
