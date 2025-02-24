"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "2bae1ba9-9ec9-4f94-8e87-f0c0a741c81d",
          ...formData,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/lvingsarcophagus",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nayan-joshy-maniyath-joshy-21443027b/",
      label: "LinkedIn",
    },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-press-start mb-8 text-center">Contact</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="pixel-corners h-full">
              <CardHeader>
                <CardTitle className="font-press-start text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary rounded pixel-corners">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <a
                    href="mailto:nayanjoshymaniyathjoshy@gmail.com"
                    className="text-sm hover:text-primary transition-colors break-all"
                  >
                    nayanjoshymaniyathjoshy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary rounded pixel-corners">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <a href="tel:+37067697863" className="text-sm hover:text-primary transition-colors">
                    +370 676 97863
                  </a>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary rounded pixel-corners">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-sm">Kaunas District Municipality, Lithuania</span>
                </div>
                <div className="flex justify-center gap-4 pt-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className="pixel-corners"
                      onClick={() => window.open(social.href, "_blank")}
                    >
                      <social.icon className="w-4 h-4" />
                      <span className="sr-only">{social.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="pixel-corners">
              <CardHeader>
                <CardTitle className="font-press-start text-xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Your Name"
                      className="pixel-corners"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="pixel-corners"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Your Message"
                      className="pixel-corners min-h-[150px]"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full pixel-corners" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

