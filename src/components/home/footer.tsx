"use client";

import { motion } from "motion/react";
import { Linkedin, Github, Twitter, Mail, Instagram } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/company/pathixopvtltd", label: "LinkedIn" },
  { icon: Github, url: "https://github.com/pathixo", label: "GitHub" },
  // { icon: Twitter, url: "#", label: "Twitter" },
  { icon: Instagram, url: "https://www.instagram.com/pathixo_?igsh=N21vb2ZrMmQxNHNs", label: "Instagram" },
  { icon: Mail, url: "mailto:founder@pathixo.com", label: "Email" },
];

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/portfolio", label: "Portfolio" }
];

export function Footer({ reqConsultation = false }: { reqConsultation?: boolean }) {
  return (
    <footer className="relative border-t border-zinc-800 z-10 pt-24 sm:pt-32 pb-8 bg-zinc-950 overflow-hidden">
      {/* Subtle background grid */}
      {/* <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}

      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          hidden={!reqConsultation}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ready to Build
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Your Next Big Idea?
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Let's collaborate to build scalable, secure, and efficient digital solutions that drive growth and innovation for your business.
          </p>
          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
          >
            Request a Consultation
          </Link>
        </motion.div>

        {/* Bottom Section */}
        <div className={`border-t border-zinc-800 ${reqConsultation ? 'mt-24' : undefined} pt-12`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* About Column */}
            <div className="md:col-span-5 lg:col-span-6">
              <h3 className="text-white font-semibold text-lg mb-4">About Pathixo</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Pathixo is a digital innovation partner specializing in high-performance web development, cloud infrastructure, and user-centric design.
                We empower businesses by turning ambitious ideas into market-leading technology.
              </p>
            </div>

            {/* Links Column */}
            <div className="md:col-span-3 lg:col-span-2">
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-zinc-400 hover:text-purple-400 transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Offices Column */}
            <div className="md:col-span-4 lg:col-span-4">
              <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="mailto:founder@pathixo.com" className="hover:text-purple-400 transition-colors duration-300">
                    founder@pathixo.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918877020121" className="hover:text-purple-400 transition-colors duration-300">
                    +91 8877 020 121
                  </a>
                </li>
              </ul>

              {/* Office Locations */}
              <h3 className="text-white font-semibold text-lg mt-6 mb-3">Our Offices</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <span className="font-medium text-white">Head Office:</span><br />
                  Lal Kuan, New Delhi - 110044
                </li>
                <li>
                  <span className="font-medium text-white">Branch Office:</span><br />
                  Bokaro Steel City, Jharkhand - 827013
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright and Socials Bar */}
          <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Pathixo. All rights reserved.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
