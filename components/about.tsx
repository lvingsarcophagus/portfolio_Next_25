"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full"
      >
        <h2 className="text-3xl font-press-start mb-8 text-center">About Me</h2>
        <Card className="pixel-corners">
          <CardContent className="p-6 space-y-4">
            <p className="text-lg leading-relaxed">
            Detail-oriented Information Systems and Cyber Security student with hands-on Linux system administration experience gained through project work and course assignments. Proven expertise in system troubleshooting, automation, and infrastructure maintenance.

            </p>
            <p className="text-lg leading-relaxed">
              Passionate about monitoring-driven operations and implementing scalable solutions. Demonstrated ability to
              quickly adapt to new technologies and solve complex technical challenges in Linux environments.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

