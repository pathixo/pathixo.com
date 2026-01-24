"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Linkedin, Github, Twitter, Mail, Phone, Loader2, Check, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Instagram, url: "https://www.instagram.com/pathixo_?igsh=N21vb2ZrMmQxNHNs" },
  { icon: Linkedin, url: "https://www.linkedin.com/company/pathixopvtltd" },
  { icon: Github, url: "https://github.com/mallsurf-packages" },
]

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("https://formspree.io/f/xdkywzap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen pt-[25vh] bg-black relative overflow-hidden px-6 pb-10" id='contact'>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-900/20 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-blue-900/20 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="text-white space-y-10 flex flex-col justify-center"
        >
          <motion.div variants={{ hidden: { width: 0 }, visible: { width: "4rem" } }} transition={{ duration: 0.8 }} className="h-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }} className="text-5xl lg:text-6xl font-bold leading-tight">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }} className="text-zinc-400 text-lg leading-relaxed">
            Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form or reach out to us directly. Let's make something amazing.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }} className="space-y-6">
            <a href="mailto:founder@pathixo.com" className="flex items-center gap-4 group">
              <Mail className="w-6 h-6 text-purple-400" />
              <span className="text-white font-medium group-hover:text-purple-300 transition-colors">founder@pathixo.com</span>
            </a>
            <a href="tel:+918877020121" className="flex items-center gap-4 group">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-white font-medium group-hover:text-blue-300 transition-colors">+91 8877 020 121</span>
            </a>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }} className="flex gap-4 pt-4">
            {socialLinks.map((social, idx) => (
              <a href={social.url} key={idx} className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-400 hover:border-purple-500 hover:text-purple-500 transition-colors">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative my-auto"
        >
          <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-purple-500/50 rounded-tl-xl"></div>
          <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-blue-500/50 rounded-tr-xl"></div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-blue-500/50 rounded-bl-xl"></div>
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-purple-500/50 rounded-br-xl"></div>

          <div className="bg-zinc-900/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-xl">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-12">
                  <Check className="w-16 h-16 mx-auto text-green-500 bg-green-500/10 rounded-full p-3" />
                  <h3 className="text-2xl font-bold mt-4">Message Sent!</h3>
                  <p className="text-zinc-400 mt-2">Thank you for reaching out. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-white text-2xl font-semibold mb-4">Send us a message</h2>
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition" />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition resize-none" />
                  </div>
                  <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === 'loading' ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Send Message'}
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