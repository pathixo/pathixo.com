"use client"

import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Link from "next/link";

export function Problems() {
  return (
    <section className="min-h-[105vh] w-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left column: problem + solution framing */}
        <div>
          <motion.h3
            initial={{ x: -12, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-2xl font-bold text-white"
          >
            Why most businesses struggle with tech delivery
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="mt-4 text-zinc-400 max-w-lg"
          >
            Juggling multiple vendors, outdated infrastructure, and slow release
            cycles eats away at growth. Teams lose focus on the actual product
            while firefighting hosting, pipelines, and integrations.
          </motion.p>

          <motion.div
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mt-6 space-y-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center font-semibold text-purple-400 min-w-9">1</div>
              <div>
                <div className="font-semibold text-white">One trusted partner</div>
                <div className="text-sm text-zinc-400">Web, mobile, and cloud — handled under one roof.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center font-semibold text-purple-400  min-w-9">2</div>
              <div>
                <div className="font-semibold text-white">Launch without delays</div>
                <div className="text-sm text-zinc-400">Battle-tested stacks and delivery pipelines for faster time to market.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center font-semibold text-purple-400  min-w-9">3</div>
              <div>
                <div className="font-semibold text-white">Scale with confidence</div>
                <div className="text-sm text-zinc-400">Cloud-native patterns, monitoring, and SLAs that keep systems reliable.</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column: approach card */}
        <aside className="h-full">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl p-6 bg-zinc-950/60 backdrop-blur-sm border border-zinc-800 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 h-full transition-colors duration-300"
          >
            <h4 className="font-semibold text-purple-400">Our approach</h4>
            <p className="mt-2 text-sm text-zinc-400">
              We don’t just build and leave — we act as your long-term engineering partner,
              owning delivery pipelines, infrastructure, and reliability so your team
              can focus on what matters: the product.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>• Tailored architecture & migration strategies</li>
              <li>• CI/CD automation and observability baked in</li>
              <li>• Security, compliance & best practices by default</li>
              <li>• 24/7 incident response and platform support</li>
            </ul>

            <div className="mt-5">
              <Link href="/#contact"
                className="bg-purple-500 hover:bg-purple-600 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Talk to an engineer
              </Link>
            </div>
          </motion.div>
        </aside>

      </div>
    </section>
  );
}
