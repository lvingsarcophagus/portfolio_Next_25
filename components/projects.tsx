"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Server, Cloud, Container, Github } from 'lucide-react' // Changed DockIcon to Container
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Ubuntu Home Server",
      description: "Personal server setup with networking, security, and monitoring",
      icon: Server,
      technologies: ["Ubuntu", "Networking", "Security"],
      github: "https://github.com/lvingsarcophagus"
    },
    {
      title: "Azure VM Automation",
      description: "Python-based automation system for Azure VM deployment",
      icon: Cloud,
      technologies: ["Python", "Azure SDK", "Docker"],
      github: "https://github.com/lvingsarcophagus/Azure-automation"
    },
    {
      title: "Docker Project",
      description: "Containerized application development and deployment project",
      icon: Container, // Changed from Docker to Container
      technologies: ["Docker", "Python", "Containerization"],
      github: "https://github.com/lvingsarcophagus/Docker-proj-VU"
    }
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-press-start mb-8 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full pixel-corners hover:shadow-lg transition-shadow">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <project.icon className="w-6 h-6 text-primary" />
                    <CardTitle className="font-press-start text-lg">{project.title}</CardTitle>
                  </div>
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}