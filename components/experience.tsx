"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink, Briefcase, Award, TrendingUp, Users, Star, Target } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const workExperience = [
    {
      title: "UI/UX Designer",
      company: "Freelancer",
      period: "2025 - Present",
      location: "Remote",
      type: "Freelance",
      status: "Current",
      description:
        "Leading end-to-end design projects for diverse clients, from startups to established brands. Specializing in user-centered design methodologies, design system creation, and strategic brand positioning through digital experiences.",
      achievements: [
        "Designed responsive e-commerce platform increasing conversion rates by 40%",
        "Created comprehensive design system reducing development time by 60%",
        "Led user research initiatives resulting in 35% improvement in user satisfaction",
        "Developed accessible interfaces meeting WCAG 2.1 AA standards across all projects",
        "Mentored junior designers and collaborated with cross-functional teams globally",
      ],
      skills: [
        "UI/UX Design",
        "Figma",
        "Design Systems",
        "User Research",
        "Prototyping",
        "Accessibility",
        "Brand Strategy",
      ],
      color: "from-emerald-100 to-emerald-200",
      borderColor: "border-emerald-300",
      iconColor: "text-emerald-600",
    },
    {
      title: "Graphic Designer & Brand Manager",
      company: "JAYDEE X",
      period: "2023 - 2024",
      location: "Polokwane, SA",
      type: "Full-time",
      status: "Completed",
      description:
        "Spearheaded brand transformation initiatives and digital presence optimization. Applied user experience principles to brand touchpoints, resulting in improved customer engagement and brand recognition across multiple channels.",
      achievements: [
        "Redesigned brand website increasing user engagement by 65% and reducing bounce rate by 45%",
        "Developed cohesive visual identity system across 15+ digital and print touchpoints",
        "Led cross-functional team of 5 members in successful brand repositioning campaign",
        "Implemented user-centered design principles improving customer journey satisfaction by 50%",
        "Created data-driven design solutions resulting in 30% increase in lead generation",
      ],
      skills: [
        "Brand Strategy",
        "Visual Design",
        "UX Principles",
        "Team Leadership",
        "Digital Marketing",
        "Customer Journey Mapping",
      ],
      color: "from-navy-100 to-navy-200",
      borderColor: "border-navy-300",
      iconColor: "text-navy-600",
    },
  ]

  const caseStudies = [
    {
      title: "Nedbank Mobile Banking Redesign",
      description:
        "Complete UX overhaul of mobile banking experience, focusing on fund transfer optimization and accessibility improvements through comprehensive user research and iterative design.",
      process:
        "Conducted 25+ user interviews, created detailed personas, mapped user journeys, and performed extensive usability testing to validate design decisions.",
      impact: "89% improvement in task completion rate",
      metrics: ["89% task completion improvement", "45% reduction in user errors", "60% faster transaction flows"],
      link: "https://v0-nedbank-mobile-banking-redesign.vercel.app/dashboard",
      skills: ["User Research", "Prototyping", "Usability Testing", "Journey Mapping", "Accessibility Design"],
      color: "from-teal-100 to-teal-200",
      category: "FinTech",
    },
    {
      title: "Tymebank Onboarding Optimization",
      description:
        "Streamlined digital onboarding experience through comprehensive competitor analysis, user flow optimization, and interactive prototype development.",
      process:
        "Analyzed 12 competitor onboarding flows, conducted A/B testing on key conversion points, and implemented progressive disclosure principles.",
      impact: "35% reduction in drop-off rate",
      metrics: ["35% drop-off reduction", "50% faster completion time", "25% increase in user satisfaction"],
      skills: [
        "Competitor Analysis",
        "A/B Testing",
        "Interactive Prototyping",
        "Conversion Optimization",
        "Form Design",
      ],
      color: "from-coral-100 to-coral-200",
      category: "FinTech",
    },
    {
      title: "E-commerce Platform Redesign",
      description:
        "End-to-end redesign of fashion e-commerce platform focusing on mobile-first approach, improved product discovery, and streamlined checkout process.",
      process:
        "Conducted user research with 30+ participants, analyzed shopping behavior patterns, and implemented personalized product recommendations based on user preferences.",
      impact: "40% increase in conversion rate",
      metrics: [
        "40% conversion improvement",
        "25% increase in average order value",
        "55% reduction in cart abandonment",
      ],
      skills: [
        "E-commerce UX",
        "Mobile Design",
        "Personalization",
        "Conversion Optimization",
        "User Behavior Analysis",
      ],
      color: "from-violet-100 to-violet-200",
      category: "E-commerce",
    },
  ]

  const competencyLevels = [
    { skill: "Creative Problem Solving", level: 95, color: "from-coral-400 to-coral-600" },
    { skill: "User Empathy", level: 92, color: "from-emerald-400 to-emerald-600" },
    { skill: "Strategic Thinking", level: 88, color: "from-navy-400 to-navy-600" },
    { skill: "Team Collaboration", level: 90, color: "from-teal-400 to-teal-600" },
    { skill: "Design Leadership", level: 85, color: "from-violet-400 to-violet-600" },
  ]

  return (
    <section ref={ref} id="experience" className="section-padding section-bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="glass-navy px-6 py-3 text-navy-800 border-navy-300/50 mb-6 text-sm font-semibold">
            Professional Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-primary mb-8">
            My Professional Journey
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-navy-400 via-teal-400 to-coral-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl sm:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
            From brand strategy to specialized UI/UX design, creating impactful digital solutions that drive measurable
            results
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Work Experience</h3>
          </motion.div>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < workExperience.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-40 bg-gradient-to-b from-navy-300 to-teal-300 hidden lg:block"></div>
                )}

                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 top-8 w-4 h-4 bg-gradient-to-br ${job.color.replace("100", "500").replace("200", "600")} rounded-full border-4 border-white shadow-lg hidden lg:block`}
                ></div>

                <Card
                  className={`lg:ml-16 card-premium card-hover bg-gradient-to-br ${job.color}/30 border-2 ${job.borderColor}`}
                >
                  <CardContent className="p-8 sm:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Badge
                            className={
                              job.status === "Current"
                                ? "bg-emerald-100 text-emerald-800 border-emerald-300 px-4 py-2"
                                : "bg-slate-100 text-slate-800 border-slate-300 px-4 py-2"
                            }
                          >
                            <div
                              className={`w-2 h-2 ${job.status === "Current" ? "bg-emerald-500" : "bg-slate-500"} rounded-full mr-2 ${job.status === "Current" ? "animate-pulse" : ""}`}
                            ></div>
                            {job.status}
                          </Badge>
                          <Badge className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1 text-xs font-medium">
                            {job.type}
                          </Badge>
                        </div>

                        <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{job.title}</h4>
                        <p className="text-xl sm:text-2xl font-bold text-gradient-primary mb-6">{job.company}</p>

                        <div className="flex flex-col sm:flex-row gap-4 text-slate-600 mb-8">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-navy-600" />
                            <span className="font-medium">{job.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-navy-600" />
                            <span className="font-medium">{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-700 mb-8 leading-relaxed text-lg">{job.description}</p>

                    <div className="mb-8">
                      <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                        <TrendingUp className="w-5 h-5 text-navy-600" />
                        Key Achievements:
                      </h5>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.2 + achIndex * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-navy-500 to-teal-500 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                            <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-slate-900 mb-4 text-lg">Skills & Technologies:</h5>
                      <div className="flex flex-wrap gap-3">
                        {job.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.2 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge className="bg-white/90 text-slate-800 border-slate-200 px-3 py-1.5 font-medium hover:bg-slate-50 transition-colors">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured Case Studies</h3>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group"
              >
                <Card
                  className={`card-premium card-hover h-full bg-gradient-to-br ${study.color}/30 border-2 border-slate-200/50`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <Badge className="bg-white/90 text-slate-700 border-slate-300 px-3 py-1 text-xs font-medium mb-3">
                          {study.category}
                        </Badge>
                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-navy-700 transition-colors leading-tight">
                          {study.title}
                        </h4>
                      </div>
                      {study.link && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-slate-600 hover:text-navy-700 hover:bg-slate-100/50 p-2"
                        >
                          <a href={study.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>

                    <p className="text-slate-700 mb-4 leading-relaxed">{study.description}</p>
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">{study.process}</p>

                    {study.impact && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-bold text-emerald-800">Primary Impact</span>
                        </div>
                        <div className="text-lg font-bold text-emerald-700">{study.impact}</div>
                      </div>
                    )}

                    {study.metrics && (
                      <div className="mb-6">
                        <h6 className="text-sm font-bold text-slate-900 mb-3">Key Metrics:</h6>
                        <div className="space-y-2">
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center gap-2">
                              <Star className="w-3 h-3 text-coral-500" />
                              <span className="text-xs text-slate-700 font-medium">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {study.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-slate-300 text-slate-700 bg-white/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="card-premium bg-gradient-to-br from-slate-800 via-navy-700 to-slate-900 text-white border-0 shadow-2xl">
            <CardContent className="p-10 sm:p-16">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <Users className="w-8 h-8 text-slate-200" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold">Core Competencies</h3>
                </div>
                <p className="text-slate-100 text-xl max-w-4xl mx-auto leading-relaxed">
                  Essential skills that drive successful design outcomes, foster innovation, and enable effective
                  leadership in complex projects
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
                {competencyLevels.map((competency, index) => (
                  <motion.div
                    key={competency.skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="mb-6">
                      <div className="text-lg font-bold mb-3 group-hover:text-slate-200 transition-colors">
                        {competency.skill}
                      </div>
                      <div className="text-4xl font-bold text-slate-200 mb-4 group-hover:scale-110 transition-transform">
                        {competency.level}%
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-white/20 rounded-full h-3 mb-2 overflow-hidden">
                        <motion.div
                          className={`bg-gradient-to-r ${competency.color} h-3 rounded-full shadow-lg`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${competency.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 1.0 + index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="mt-16 text-center"
              >
                <p className="text-slate-100 text-lg max-w-3xl mx-auto leading-relaxed">
                  These competencies, refined through diverse project experiences and continuous learning, enable me to
                  deliver exceptional design solutions while building strong relationships with clients and team members
                  worldwide.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
