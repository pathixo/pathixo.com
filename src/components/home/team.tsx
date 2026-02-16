"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const team = [
  {
    name: "Abhijeet Jha",
    role: "COO",
    description:
      "Passionate about developing AI-driven solutions to solve real-world problems.",
    image: "https://avatars.githubusercontent.com/u/169458770?v=4",
  },
  {
    name: "Roshan Kumar",
    role: "CTO",
    description:
      "Leading technology strategy and development for innovative solutions.",
    image: "/roshan.png",
  },
  {
    name: "Ayush Tripathi",
    role: "Founder",
    description: "",
    image: "/tripathi.png",
  },
  {
    name: "Nitish Pandit",
    role: "Co-founder",
    description:
      "Driving business growth and client relationships with strategic expertise.",
    image: "/nitish.png",
  },
  {
    name: "Vijay Jha",
    role: "Director",
    description: "",
    image: "/vjha.jpg",
  },
  {
    name: "Ankit Kumar",
    role: "Devops Engineer",
    description:
      "Specializing in cloud infrastructure, CI/CD pipelines, and system reliability.",
    image: "/ankit.png",
  },
  // {
  //   name: "Kartik Singh",
  //   role: "UI/UX Designer",
  //   description:
  //     "Crafting intuitive and engaging user experiences through innovative design.",
  //   image: "/om.png",
  // },
]

const AUTO_INTERVAL = 5000

export default function MeetTheTeam() {
  const [activeIndex, setActiveIndex] = useState(2)

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % team.length)

  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length)

  useEffect(() => {
    const interval = setInterval(next, AUTO_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  const activeMember = team[activeIndex]

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center py-24">
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
            Team
          </h2>
          <p className="text-4xl md:text-5xl font-semibold">
            Meet the team
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-80 flex items-center justify-center">

          {team.map((member, index) => {
            let offset = index - activeIndex
            if (offset > team.length / 2) offset -= team.length
            if (offset < -team.length / 2) offset += team.length

            const isVisible = Math.abs(offset) <= 2

            return (
              <motion.div
                key={member.name}
                className="absolute w-60 h-80 rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer"
                animate={{
                  x: offset * 240,
                  scale: offset === 0 ? 1 : 0.85,
                  opacity: isVisible ? (offset === 0 ? 1 : 0.5) : 0,
                  zIndex: 10 - Math.abs(offset),
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Description */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-400 leading-relaxed min-h-[72px]"
            >
              {activeMember.description}
            </motion.p>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex justify-center gap-6">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-zinc-800 hover:bg-zinc-900 transition"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full border border-zinc-800 hover:bg-zinc-900 transition"
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
