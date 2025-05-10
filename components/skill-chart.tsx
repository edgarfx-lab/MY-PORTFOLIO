"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

interface SkillData {
  name: string
  level: number
  color: string
}

const skills: SkillData[] = [
  { name: "HTML/CSS", level: 90, color: "#e34c26" },
  { name: "JavaScript", level: 85, color: "#f0db4f" },
  { name: "React", level: 80, color: "#61DBFB" },
  { name: "TypeScript", level: 75, color: "#007acc" },
  { name: "UI/UX Design", level: 70, color: "#ff7eb6" },
  { name: "Responsive Design", level: 85, color: "#7e57c2" },
]

export default function SkillChart() {
  const [mounted, setMounted] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const centerX = 150
  const centerY = 150
  const radius = 120
  const angleStep = (Math.PI * 2) / skills.length

  // Calculate points for the radar chart
  const calculatePoint = (index: number, level: number) => {
    const angle = index * angleStep - Math.PI / 2 // Start from top
    const distance = (level / 100) * radius
    return {
      x: centerX + distance * Math.cos(angle),
      y: centerY + distance * Math.sin(angle),
    }
  }

  // Generate the path for the skill polygon
  const generateSkillPath = () => {
    return (
      skills
        .map((skill, index) => {
          const point = calculatePoint(index, skill.level)
          return `${index === 0 ? "M" : "L"} ${point.x},${point.y}`
        })
        .join(" ") + " Z"
    ) // Close the path
  }

  // Generate the path for the background grid
  const generateGridPath = (level: number) => {
    return (
      skills
        .map((_, index) => {
          const point = calculatePoint(index, level)
          return `${index === 0 ? "M" : "L"} ${point.x},${point.y}`
        })
        .join(" ") + " Z"
    ) // Close the path
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skill Proficiency" subtitle="Visual representation of my expertise" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <motion.div
            className="relative w-[300px] h-[300px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <svg width="300" height="300" viewBox="0 0 300 300">
              {/* Background grid */}
              {[20, 40, 60, 80, 100].map((level) => (
                <motion.path
                  key={level}
                  d={generateGridPath(level)}
                  fill="none"
                  stroke={`rgba(145, 234, 175, ${level / 400})`}
                  strokeWidth="1"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: level / 200 }}
                />
              ))}

              {/* Skill polygon */}
              <motion.path
                d={generateSkillPath()}
                fill="rgba(145, 234, 175, 0.2)"
                stroke="rgba(145, 234, 175, 0.8)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Skill points and labels */}
              {skills.map((skill, index) => {
                const point = calculatePoint(index, skill.level)
                const labelAngle = index * angleStep - Math.PI / 2
                const labelDistance = radius + 30
                const labelX = centerX + labelDistance * Math.cos(labelAngle)
                const labelY = centerY + labelDistance * Math.sin(labelAngle)

                // Adjust text anchor based on position
                let textAnchor = "middle"
                if (labelX < centerX - 20) textAnchor = "end"
                if (labelX > centerX + 20) textAnchor = "start"

                const isHovered = hoveredSkill === skill.name

                return (
                  <g key={skill.name}>
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r={isHovered ? 8 : 5}
                      fill={skill.color}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{ cursor: "pointer" }}
                    />
                    <motion.text
                      x={labelX}
                      y={labelY}
                      textAnchor={textAnchor}
                      dominantBaseline="middle"
                      fontSize={isHovered ? "14" : "12"}
                      fontWeight={isHovered ? "bold" : "normal"}
                      fill={isHovered ? skill.color : "currentColor"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{ cursor: "pointer" }}
                    >
                      {skill.name}
                    </motion.text>
                  </g>
                )
              })}
            </svg>
          </motion.div>

          <motion.div
            className="bg-black/50 border border-green-forest rounded-lg p-6 max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Skill Breakdown</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span
                      className={`font-medium ${hoveredSkill === skill.name ? "text-primary" : ""}`}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill.name}
                    </span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
