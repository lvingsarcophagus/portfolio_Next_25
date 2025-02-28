"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ProjectPreview } from "./project-preview"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Server, Cloud, Container, Github, Code, Shield, Terminal, Globe } from 'lucide-react' // Added Terminal and Globe icons
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const filterOptions = ["all", "linux", "cloud", "containerization", "frontend", "security"]
  
  const projects = [
    {
      title: "Modern Portfolio",
      description: "A modern portfolio website built with Next.js 14, featuring pixel-perfect UI, dark mode, and interactive animations",
      icon: Code,
      technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      github: "https://github.com/lvingsarcophagus/portfolio_Next_25",
      category: "frontend"
    },
    {
      title: "Static Portfolio Website",
      description: "A clean, responsive portfolio website built with vanilla HTML, CSS, and JavaScript",
      icon: Globe,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/lvingsarcophagus/Portfolio-static_website",
      category: "frontend"
    },
    {
      title: "Python Port Scanner",
      description: "A custom-built port scanning tool with multiple scan types and detailed reporting capabilities",
      icon: Shield,
      technologies: ["Python", "Networking", "Security", "Socket Programming"],
      github: "https://github.com/lvingsarcophagus/PY_PORTSCANNER",
      category: "security"
    },
    {
      title: "Kitty Terminal Theme",
      description: "Custom theme for the Kitty terminal emulator with optimized colors and enhanced readability for developers",
      icon: Terminal,
      technologies: ["Linux", "Bash", "Terminal", "UI/UX"],
      github: "https://github.com/lvingsarcophagus/Kitty_coustom-_theme",
      category: "linux"
    },
    {
      title: "Ubuntu Docker Server",
      description: "Complete server setup with Docker, Nginx, and automated deployment pipelines",
      icon: Server,
      technologies: ["Ubuntu", "Docker", "Nginx", "CI/CD"],
      github: "https://github.com/lvingsarcophagus/ubuntu-docker-server",
      category: "linux", // This will be handled specially for multiple categories
      additionalCategories: ["containerization"]
    },
    {
      title: "Azure VM Automation",
      description: "Python-based automation system for Azure VM deployment",
      icon: Cloud,
      technologies: ["Python", "Azure SDK", "Docker"],
      github: "https://github.com/lvingsarcophagus/Azure-automation",
      category: "cloud"
    },
    {
      title: "Docker Project",
      description: "Containerized application development and deployment project",
      icon: Container,
      technologies: ["Docker", "Python", "Containerization"],
      github: "https://github.com/lvingsarcophagus/Docker-proj-VU",
      category: "containerization"
    }
  ]

  // Modified filtering logic to handle multiple categories
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter || p.additionalCategories?.includes(filter));

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-press-start mb-8 text-center">Projects</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          {filterOptions.map((option) => (
            <motion.button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-md pixel-corners capitalize ${
                filter === option 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                layoutId={`card-${project.title}`}
              >
                <Card 
                  className="h-full pixel-corners group cursor-pointer perspective-1000"
                  onClick={() => setSelectedProject(project)}
                >
                  <motion.div
                    className="h-full transform-gpu transition-all duration-300 group-hover:[transform:rotateX(10deg)_rotateY(10deg)]"
                  >
                    <CardHeader className="p-6">
                      <motion.div 
                        className="flex items-center gap-2 mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <project.icon className="w-6 h-6 text-primary" />
                        <CardTitle className="font-press-start text-lg">{project.title}</CardTitle>
                      </motion.div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="mb-4 text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs pixel-corners"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full pixel-corners"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </Button>
                    </CardFooter>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectPreview
            {...selectedProject}
            isVisible={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}