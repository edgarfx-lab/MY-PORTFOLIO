"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Award, GraduationCap, ExternalLink, CheckCircle, Star } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "Certificate in UX Design",
      provider: "Upskillist UK",
      period: "2024-2025",
      grade: "Merit",
      status: "Completed",
      description:
        "Comprehensive UX design program covering user research, wireframing, prototyping, and usability testing methodologies. Globally recognized certification with practical project work.",
      skills: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Design Thinking",
        "User Journey Mapping",
      ],
      logo: "/upskillist-logo.png",
      verification: "Verify at: Upskillist.com/verify",
      type: "Professional Certificate",
      modules: "Module 2 of 2",
      color: "from-blue-100 to-blue-200",
      borderColor: "border-blue-300",
    },
    {
      title: "Power BI UI/UX Design Roadmap",
      provider: "Mindluster",
      period: "2024-2025",
      status: "Completed",
      description:
        "Specialized training in UI/UX design principles for data visualization and business intelligence applications. Focus on dashboard design and user interface optimization.",
      skills: [
        "Data Visualization",
        "UI Design",
        "Power BI",
        "Dashboard Design",
        "Information Architecture",
        "User Interface",
      ],
      logo: "/mindluster-logo.png",
      type: "Specialized Course",
      color: "from-green-100 to-green-200",
      borderColor: "border-green-300",
    },
  ]

  const education = [
    {
      title: "National Senior Certificate",
      institution: "S.T Gregories College",
      period: "2023",
      type: "Secondary Education",
      description:
        "Completed secondary education with focus on mathematics, science, and creative subjects. Strong foundation in analytical thinking and problem-solving.",
      achievements: ["Strong academic foundation", "Creative problem-solving skills", "Team collaboration experience"],
      logo: "/st-gregories-logo.png",
      color: "from-purple-100 to-purple-200",
    },
  ]

  const continuousLearning = [
    {
      title: "Advanced Figma Techniques",
      platform: "Self-directed Learning",
      status: "In Progress",
      progress: 75,
      description: "Mastering advanced prototyping and design system creation",
    },
    {
      title: "Accessibility in Design",
      platform: "Online Resources",
      status: "In Progress",
      progress: 60,
      description: "WCAG guidelines and inclusive design practices",
    },
    {
      title: "User Research Methods",
      platform: "Design Community",
      status: "Completed",
      progress: 100,
      description: "Advanced techniques for user interviews and testing",
    },
    {
      title: "Design Systems",
      platform: "Industry Resources",
      status: "In Progress",
      progress: 80,
      description: "Building scalable and maintainable design systems",
    },
  ]

  return (
    <section ref={ref} id="certifications" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="glass-brown px-4 py-2 text-brown-800 border-brown-300/50 mb-4">
            Education & Certifications
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mb-6">Learning & Growth</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brown-400 to-brown-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development in UX/UI design
          </p>
        </motion.div>

        {/* Professional Certifications */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-12"
          >
            <Award className="w-6 h-6 text-brown-600" />
            <h3 className="text-2xl sm:text-3xl font-bold text-brown-900">Professional Certifications</h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card
                  className={`glass-brown ${cert.borderColor} border-2 card-hover h-full bg-gradient-to-br ${cert.color}/20`}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={`${cert.provider} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge className="bg-green-100 text-green-800 border-green-300">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {cert.status}
                          </Badge>
                          {cert.grade && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                              <Star className="w-3 h-3 mr-1" />
                              {cert.grade}
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs border-brown-300 text-brown-700">
                            {cert.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-brown-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.period}</span>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-brown-900 mb-3 group-hover:text-brown-700 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-base font-semibold text-brown-700 mb-4">{cert.provider}</p>
                    <p className="text-brown-700 leading-relaxed mb-6">{cert.description}</p>

                    {cert.modules && (
                      <div className="mb-4 p-3 bg-brown-100/50 rounded-lg border border-brown-200/50">
                        <div className="text-sm font-medium text-brown-800">{cert.modules}</div>
                      </div>
                    )}

                    {cert.verification && (
                      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">Verification Available</span>
                        </div>
                        <p className="text-sm text-blue-700">{cert.verification}</p>
                      </div>
                    )}

                    <div className="mb-6">
                      <h5 className="font-semibold text-brown-900 mb-3">Skills Covered:</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} className="bg-brown-100/80 text-brown-800 border-brown-200 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full btn-secondary group bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 mb-12"
          >
            <GraduationCap className="w-6 h-6 text-brown-600" />
            <h3 className="text-2xl sm:text-3xl font-bold text-brown-900">Education</h3>
          </motion.div>

          <div className="max-w-3xl">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.01, y: -3 }}
              >
                <Card className={`glass-brown border-brown-200/50 card-hover bg-gradient-to-br ${edu.color}/20`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Image
                          src={edu.logo || "/placeholder.svg"}
                          alt={`${edu.institution} logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl sm:text-2xl font-bold text-brown-900 mb-2">{edu.title}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-brown-600 mb-2">
                          <span className="font-semibold text-brown-700">{edu.institution}</span>
                          <Badge variant="outline" className="text-xs border-brown-300 text-brown-700">
                            {edu.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-brown-600">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-brown-700 leading-relaxed mb-6">{edu.description}</p>

                    <div>
                      <h5 className="font-semibold text-brown-900 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-brown-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Card className="glass-brown border-brown-200/50 bg-gradient-to-br from-brown-600 via-brown-700 to-brown-800 text-white">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-brown-200" />
                  <h3 className="text-2xl sm:text-3xl font-bold">Continuous Learning</h3>
                </div>
                <p className="text-brown-100 text-lg max-w-3xl mx-auto">
                  Staying current with the latest design trends, tools, and methodologies through ongoing education
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {continuousLearning.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-sm sm:text-base">{course.title}</h4>
                      <p className="text-brown-100 text-xs sm:text-sm mb-2">{course.platform}</p>
                      <p className="text-brown-200 text-xs leading-relaxed">{course.description}</p>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-brown-200">{course.status}</span>
                        <span className="text-xs text-brown-200">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          className="bg-white h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${course.progress}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.9 + index * 0.1 }}
                        />
                      </div>
                    </div>

                    <Badge
                      className={`text-xs ${
                        course.status === "Completed"
                          ? "bg-green-500/20 text-green-200 border-green-400"
                          : "bg-blue-500/20 text-blue-200 border-blue-400"
                      }`}
                    >
                      {course.status}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-12 text-center"
              >
                <p className="text-brown-100 text-lg max-w-2xl mx-auto">
                  I believe in lifelong learning and staying ahead of industry trends. This commitment to growth ensures
                  I can deliver cutting-edge design solutions that meet evolving user needs.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
