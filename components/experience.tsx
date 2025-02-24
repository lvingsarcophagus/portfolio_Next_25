"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Linux System Administration",
      duration: "3+ years",
      points: [
        "Managed multiple Linux distributions as primary operating system",
        "Utilized bash commands for log analysis and system diagnostics",
        "Implemented containerized applications using Docker",
        "Created and managed virtual machines",
        "Automated routine system maintenance tasks",
        "Troubleshot network connectivity issues",
      ],
    },
    {
      title: "Ubuntu Home Server Setup & Administration",
      points: [
        "Set up and maintained a personal Ubuntu server",
        "Configured networking, security, and remote access",
        "Managed system updates and backups",
        "Implemented monitoring procedures",
      ],
    },
    {
      title: "Azure VM Automation Project",
      points: [
        "Developed Python-based automation for Azure VM deployment",
        "Implemented automated resource group management",
        "Configured virtual networks and security",
        "Built Docker containerization",
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-press-start mb-8 text-center">Experience</h2>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="pixel-corners">
                <CardHeader>
                  <CardTitle className="font-press-start text-xl">
                    {exp.title}
                    {exp.duration && <span className="text-sm text-muted-foreground ml-2">({exp.duration})</span>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground">
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

