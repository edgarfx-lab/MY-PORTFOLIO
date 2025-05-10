"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import SectionHeading from "./section-heading"

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website showcasing my skills and projects.",
    image: "/placeholder.svg?height=400&width=600&text=Portfolio+Website",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://jaydeeedgar.vercel.app/",
    githubUrl: "https://github.com/",
  },
  {
    title: "E-commerce UI",
    description: "A modern e-commerce user interface with product listings and cart functionality.",
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+UI",
    tags: ["React", "CSS", "Context API", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "https://github.com/",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current and forecasted weather data.",
    image: "/placeholder.svg?height=400&width=600&text=Weather+Dashboard",
    tags: ["JavaScript", "API Integration", "CSS Grid", "Local Storage"],
    liveUrl: "#",
    githubUrl: "https://github.com/",
  },
  {
    title: "Task Manager",
    description: "A task management application with drag-and-drop functionality.",
    image: "/placeholder.svg?height=400&width=600&text=Task+Manager",
    tags: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
    liveUrl: "#",
    githubUrl: "https://github.com/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Projects" subtitle="Some of my recent work" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-hover h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
