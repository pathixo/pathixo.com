/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from 'motion/react'
import RotatingText from "../RotatingText"
import Link from 'next/link'

export function Hero() {
    return (
        <section className="fixed top-0 z-0 w-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Noise Images */}
            <div className="absolute inset-0 w-screen h-full -z-10 pointer-events-none opacity-60">
                <img 
                    src="/lb-noise.webp" 
                    alt="" 
                    className="hidden md:block object-cover w-full h-full" 
                />
                <img 
                    src="/mb-noise.webp" 
                    alt="" 
                    className="block md:hidden object-cover w-full h-full" 
                />
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto z-10">
                
                {/* Main Heading */}
                <h1 className="font-bold leading-tight text-center mb-6 text-white">
                    
                    {/* Line 1: Smarter [Rotating] Solutions */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                        <span className="tracking-tight">Smarter</span>
                        
                        {/* Rotating Text Container */}
                        <span className="relative inline-flex justify-center items-center h-[1.2em] min-w-[200px] sm:min-w-[280px] overflow-hidden rounded-full mx-2">
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90" />
                            <div className="relative z-10 flex items-center justify-center w-full h-full">
                                <RotatingText
                                    texts={['Web', 'Digital', 'SaaS', 'Mobile', 'Cloud']}
                                    mainClassName="px-2 sm:px-4 text-white font-bold tracking-wide"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                />
                            </div>
                        </span>
                        
                        <span className="tracking-tight">Solutions</span>
                    </div>

                    {/* Line 2: Brand Statement */}
                    <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                        <span className="text-base sm:text-lg md:text-xl text-gray-300 font-medium">
                            Expertly crafted with care by
                        </span>
                        
                        {/* Animated Border Button Wrapper */}
                        <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-xl sm:text-2xl font-extrabold text-white backdrop-blur-3xl">
                                Pathixo
                            </span>
                        </span>
                    </div>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-lg sm:max-w-2xl mx-auto leading-relaxed">
                    We design and build smarter web, mobile, and cloud solutions that help businesses scale and succeed in the digital world.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 sm:mb-20">
                    {/* Primary Button */}
                    <button className="relative w-full sm:w-auto inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-950 group">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <Link 
                            href="/#contact" 
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-sm sm:text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:opacity-90"
                        >
                            Start Your Project
                        </Link>
                    </button>

                    {/* Secondary Button */}
                    <Link 
                        href="https://cal.com/pathixo/quickchat" 
                        className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1.5 opacity-70">
                        <motion.div
                            className="w-1 h-2.5 bg-white rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}