"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Linkedin, Github, Mail, ArrowLeft, ArrowRight } from "lucide-react"

const team = [
  {
    name: "Abhijeet Jha",
    role: "COO & AI/ML Engineer",
    description:
      "Passionate about developing AI-driven solutions to solve real-world problems.",
    image: "https://avatars.githubusercontent.com/u/169458770?v=4",
    socials: [
      // { icon: Linkedin, url: "#", label: "LinkedIn" },
      // { icon: Github, url: "https://github.com/jhaabhijeet864", label: "GitHub" },
      // { icon: Mail, url: "mailto:abhijeet@pathixo.com", label: "Email" },
    ],
  },
  {
    name: "Roshan Kumar",
    role: "CTO",
    description: "Leading technology strategy and development for innovative solutions.",
    image: "/roshan.png",
    socials: [
      // { icon: Linkedin, url: "#", label: "LinkedIn" },
      // { icon: Github, url: "https://github.com/roshancodespace", label: "GitHub" },
      // { icon: Mail, url: "mailto:roshan@pathixo.com", label: "Email" },
    ],
  },
  {
    name: "Ayush Tripathi",
    role: "Founder",
    description:
      "",
    image: "/tripathi.png",
    socials: [
      // { icon: Linkedin, url: "#", label: "LinkedIn" },
      // { icon: Mail, url: "mailto:ayush@pathixo.com", label: "Email" },
    ],
  },
  {
    name: "Nitish Pandit",
    role: "Co-founder",
    description:
      "Driving business growth and client relationships with strategic expertise.",
    image: "/nitish.png",
    socials: [
      // { icon: Linkedin, url: "#", label: "LinkedIn" },
      // { icon: Mail, url: "mailto:nitish@pathixo.com", label: "Email" },
    ],
  },
  {
    name: "Ankit Kumar",
    role: "Devops Engineer",
    description:
      "Specializing in cloud infrastructure, CI/CD pipelines, and system reliability.",
    image: "/ankit.png",
    socials: [
      // { icon: Linkedin, url: "#", label: "LinkedIn" },
      // { icon: Mail, url: "mailto:piyush@pathixo.com", label: "Email" },
    ],
  },
    {
    name: "Kartik Singh",
    role: "UI/UX Designer",
    description:"Crafting intuitive and engaging user experiences through innovative design.",
    image: "/om.png",
    socials: [
      // { icon: Linkedin, url: "#", label: "LinkedIn" },
      // { icon: Mail, url: "mailto:piyush@pathixo.com", label: "Email" },
    ],
  },
]

const AUTO_INTERVAL_MS = 5000

export default function MeetTheTeam() {
  const [activeIndex, setActiveIndex] = useState(2)
  const activeMember = team[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % team.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, AUTO_INTERVAL_MS)

    return () => {
      clearInterval(interval)
    }
  }, [activeIndex])

  return (
    <section className="relative max-w-screen overflow-hidden flex flex-col justify-center min-h-screen py-20 md:py-28 text-white bg-black">
      <div className="absolute inset-0 bg-dot-white/[0.07] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
            Team Section
          </h2>
          <p className="text-4xl md:text-5xl font-bold">Meet the team</p>
        </div>

        <div className="relative h-72 flex items-center justify-center">
          {team.map((member, index) => {
            let offset = index - activeIndex
            if (offset > team.length / 2) offset -= team.length
            if (offset < -team.length / 2) offset += team.length

            const isVisible = Math.abs(offset) <= 2

            return (
              <motion.div
                key={member.name}
                className="absolute w-56 h-72 rounded-2xl overflow-hidden cursor-pointer"
                initial="hidden"
                whileHover="visible"
                animate={{
                  scale: isVisible ? (offset === 0 ? 1 : 0.8) : 0,
                  x: `${offset * 220}px`, // Increased spacing for wider cards
                  zIndex: team.length - Math.abs(offset),
                  opacity: isVisible ? (offset === 0 ? 1 : 0.4) : 0,
                  filter: offset === 0 ? "grayscale(0%)" : "grayscale(100%)",
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-zinc-300">{member.role}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <div className="relative mt-12 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center max-w-xl"
            >
              <p className="text-zinc-400 text-base leading-relaxed mb-6 min-h-[72px]">
                {activeMember.description}
              </p>
              {activeMember.socials && (<div className="flex justify-center gap-4">
                {activeMember.socials.map((social: {
                  icon: React.ComponentType<any>
                  url: string
                  label: string
                }) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-purple-400 hover:scale-110 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>)}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex gap-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-zinc-700 text-zinc-400 hover:bg-zinc-800 transition-all"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-zinc-700 text-zinc-400 hover:bg-zinc-800 transition-all"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}