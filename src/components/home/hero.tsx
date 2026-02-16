/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from 'motion/react'
import RotatingText from "../RotatingText"
import Link from 'next/link'

export function Hero() {
    return (
        <section className="fixed  top-0 z-0 w-screen flex items-center justify-center overflow-hidden">
            {/* Content Container */}
            <div className="relative h-screen mt-[25vh] flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full max-w-7xl mx-auto z-10">
                
                {/* Main Heading */}
                <h1 className="font-bold leading-tight text-center mb-4 sm:mb-6 md:mb-8 text-white">
                    
                    {/* Line 1: Smarter [Rotating] Solutions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                        <span className="tracking-tight">Smarter</span>
                        
                        {/* Rotating Text Container - Fully Responsive */}
                        <span className="relative inline-flex justify-center items-center h-[1.2em] w-45 xs:w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] overflow-hidden rounded-full mx-1 sm:mx-2">
                            <span className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 opacity-90" />
                            <div className="relative z-10 flex items-center justify-center w-full h-full">
                                <RotatingText
                                    texts={['Web', 'Digital', 'SaaS', 'Mobile', 'Cloud']}
                                    mainClassName="px-3 xs:px-4 sm:px-5 md:px-6 text-white font-bold tracking-wide"
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
                    <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
                        <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-medium">
                            Expertly crafted with care by
                        </span>
                        
                        {/* Animated Border Button Wrapper */}
                        <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-slate-950 px-4 xs:px-5 sm:px-6 py-1.5 sm:py-2 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white backdrop-blur-3xl">
                                Pathixo
                            </span>
                        </span>
                    </div>
                </h1>

                {/* Description */}
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-[280px] xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
                    We design and build smarter web, mobile, and cloud solutions that help businesses scale and succeed in the digital world.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
                    {/* Primary Button */}
                    <button className="relative w-full sm:w-auto inline-flex h-11 sm:h-12 md:h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-950 group">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <Link 
                            href="/#contact" 
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-xs xs:text-sm sm:text-base md:text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:opacity-90"
                        >
                            Start Your Project
                        </Link>
                    </button>

                    {/* Secondary Button */}
                    <Link 
                        href="https://cal.com/pathixo/quickchat" 
                        className="w-full sm:w-auto inline-flex h-11 sm:h-12 md:h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Scroll Down Indicator - Hidden on very small screens */}
                <div className="hidden xs:block absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2">
                    <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1 sm:p-1.5 opacity-70">
                        <motion.div
                            className="w-1 h-2 sm:h-2.5 bg-white rounded-full"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}