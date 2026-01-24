"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Linkedin, Github, Loader2, Check, Instagram, Mail, Phone, ArrowRight } from "lucide-react"

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/pathixo_?igsh=N21vb2ZrMmQxNHNs" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/pathixopvtltd" },
  { icon: Github, label: "GitHub", url: "https://github.com/mallsurf-packages" },
]

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    const res = await fetch("https://formspree.io/f/xdkywzap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } else {
      setStatus("error")
    }
  }

  return (
    <section className="bg-background min-h-screen flex px-4" id="contact">
      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Contact info section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center"
        >
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-2">Contact</h1>
          <div className="h-0.5 w-16 bg-primary mb-10" />

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-3">Email</h2>
              <a
                href="mailto:founder@pathixo.com"
                className="text-primary hover:underline underline-offset-4 transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                founder@pathixo.com
              </a>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-3">Phone</h2>
              <a
                href="tel:+918877020121"
                className="text-primary hover:underline underline-offset-4 transition-colors flex items-center gap-2 group"
              >
                <Phone className="w-4 h-4" />
                +91 8877 020 121
              </a>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-3">Social Media</h2>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:w-1/2 bg-card border-l border-border p-8 lg:p-12 flex items-center"
        >
          <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto border-2 border-primary flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground mb-2">Message Sent</h3>
                  <p className="text-muted-foreground text-sm mb-6">We will get back to you shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-primary hover:underline underline-offset-4 text-sm inline-flex items-center gap-2"
                  >
                    Send another message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-light text-foreground mb-1">Send a message</h2>
                    <p className="text-sm text-muted-foreground">We would love to hear from you.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium tracking-wider text-muted-foreground uppercase mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wider text-muted-foreground uppercase mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wider text-muted-foreground uppercase mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        required
                        className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary text-primary-foreground font-medium py-3 px-6 text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
