"use client"

import { ShieldCheck, Zap, Users, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "We ensure your applications and data are secure using best-in-class security practices, giving you peace of mind and compliance-ready solutions.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    description:
      "From ideation to deployment, we deliver web and mobile solutions efficiently without compromising quality, helping your business grow rapidly.",
  },
  {
    icon: Users,
    title: "Expert Team Collaboration",
    description:
      "Our team of experienced developers, designers, and consultants work closely with you to understand your goals and provide tailor-made solutions.",
  },
  {
    icon: Rocket,
    title: "Scalable & Future-Ready",
    description:
      "We build systems that grow with your business — scalable architectures, maintainable code, and modern technologies to keep you ahead.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Background accents */}
      {/* <div className="absolute inset-0 bg-dot-white/[0.07] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute bottom-0 inset-x-0 h-[30rem] bg-[radial-gradient(ellipse_80%_100%_at_50%_120%,rgba(147,51,234,0.25)_0%,rgba(79,70,229,0)_100%)]" /> */}

      <div className="max-w-7xl mx-auto px-6">
        <p className="text-zinc-400 text-sm font-medium tracking-wider uppercase mb-4">
          WHY CHOOSE US
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          Why{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Pathixo
          </span>{" "}
          Stands Out
        </h2>

        <div className="max-md:space-y-5 md:grid grid-cols-3 gap-8">
          {reasons.slice(0, 3).map((reason, idx) => (
            <div
              key={idx}
              className={`bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 transition-all duration-300 flex flex-col gap-4 
              hover:bg-zinc-900/80
              ${idx == 2 && "row-start-2 col-span-2 col-start-2"}`}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-linear-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-purple-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold">{reason.title}</h3>
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}

          {/* Highlighted Scalable card */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 transition-all duration-300 flex flex-col gap-6 md:row-span-2 md:row-start-1 hover:bg-zinc-900/80">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">{reasons[3].title}</h3>
            </div>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {reasons[3].description}
            </p>
            <Link href='/about' className="mt-auto ml-auto self-start inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
