"use client"

import { motion } from "framer-motion"
import { Terminal, Code2, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Hero() {
  const titles = ["SOC Analyst", "Cybersecurity Expert", "System Administrator"]
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 grid-rows-8 gap-1 opacity-5">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.02,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 relative">
        <div className="flex justify-center gap-4 mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-12 h-12 md:w-16 md:h-16 bg-primary pixel-corners flex items-center justify-center"
          >
            <Terminal className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="w-12 h-12 md:w-16 md:h-16 bg-secondary pixel-corners flex items-center justify-center"
          >
            <Code2 className="w-6 h-6 md:w-8 md:h-8 text-secondary-foreground" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="w-12 h-12 md:w-16 md:h-16 bg-primary pixel-corners flex items-center justify-center"
          >
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-press-start leading-tight">
            Nayan Joshy
            <br />
            <span className="text-xl md:text-3xl lg:text-4xl">Maniyath Joshy</span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-8 md:h-10"
          >
            <motion.p
              key={titles[currentTitle]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-primary font-press-start"
            >
              {titles[currentTitle]}
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <Button
            variant="default"
            className="pixel-corners font-press-start text-sm"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          >
            About Me
          </Button>
          <Button
            variant="secondary"
            className="pixel-corners font-press-start text-sm"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

