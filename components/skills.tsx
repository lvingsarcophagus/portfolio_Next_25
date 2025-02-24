"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Competencies",
      skills: ["SOC Analysis", "Cybersecurity", "Threat Detection", "Linux Administration", "Infrastructure Security"],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "Bash/Shell", "HTML/CSS", "JavaScript", "C++"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Docker", "Git & GitHub", "Next.js", "React", "VM Configuration"],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-press-start mb-8 text-center">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full pixel-corners">
                <CardHeader>
                  <CardTitle className="font-press-start text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded pixel-corners text-sm"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

