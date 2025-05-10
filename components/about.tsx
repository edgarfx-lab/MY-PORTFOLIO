"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, Phone, MapPin } from "lucide-react"
import SectionHeading from "./section-heading"
import Image from "next/image"

export default function About() {
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
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-padding bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="lg:col-span-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-4 gradient-text"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Professional Summary
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    A passionate and self-motivated Front-End Developer with a creative eye and a solid foundation in
                    HTML, CSS, JavaScript, and React. Proven ability to design responsive, user-centric web interfaces
                    with clean, maintainable code.
                  </motion.p>
                  <motion.p
                    className="text-muted-foreground mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Combines technical skills with a background in customer service, graphic design, and brand
                    development to deliver complete digital experiences. Eager to grow in the tech industry and
                    contribute to forward-thinking development teams.
                  </motion.p>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="bg-accent/50 rounded-lg p-4"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <h4 className="font-medium mb-2">Languages</h4>
                      <div className="flex items-center justify-between">
                        <span>English</span>
                        <span className="text-primary">Advanced</span>
                      </div>
                      <motion.div
                        className="w-full h-2 bg-background rounded-full mt-1"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8, duration: 0.8 }}
                        ></motion.div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="bg-accent/50 rounded-lg p-4"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <h4 className="font-medium mb-2">Education</h4>
                      <p className="text-sm text-muted-foreground">S.T. Gregories College</p>
                      <p className="text-sm">National Senior Certificate</p>
                      <p className="text-sm text-muted-foreground mt-2">IIE Rosebank College</p>
                      <p className="text-sm">Software Developer (2025-2027)</p>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <motion.div
                      className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
                    >
                      <Image src="/profile-image.jpeg" alt="Edgar Mahlare" fill className="object-cover" priority />
                    </motion.div>
                    <motion.h3
                      className="text-xl font-semibold gradient-text"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      Kgope Edgar Mahlare
                    </motion.h3>
                  </div>

                  <motion.h3
                    className="text-xl font-semibold mb-4 gradient-text"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Personal Info
                  </motion.h3>

                  <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div className="flex items-start" variants={itemVariants} whileHover={{ x: 5 }}>
                      <User className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Name</h4>
                        <p className="text-muted-foreground">Kgope Edgar Mahlare</p>
                      </div>
                    </motion.div>

                    <motion.div className="flex items-start" variants={itemVariants} whileHover={{ x: 5 }}>
                      <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a
                          href="mailto:kgopemahlare@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          kgopemahlare@gmail.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div className="flex items-start" variants={itemVariants} whileHover={{ x: 5 }}>
                      <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a
                          href="tel:+27814720477"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +27 81 472 0477
                        </a>
                      </div>
                    </motion.div>

                    <motion.div className="flex items-start" variants={itemVariants} whileHover={{ x: 5 }}>
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">53A Thabo Mbeki, Polokwane, South Africa</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="mt-6 pt-6 border-t border-border"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="font-medium mb-2">Website</h4>
                    <a
                      href="https://jaydeeedgar.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all"
                    >
                      jaydeeedgar.vercel.app
                    </a>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
