"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronRight } from "lucide-react"

function Navigation() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        let bodyStyle = document.body.style
        if (open) {
            bodyStyle.overflowY = "hidden"
        } else {
            bodyStyle.overflowY = "auto"
        }
    }, [open])

    return (
        <nav
            className={`
                fixed left-0 right-0 z-50 mx-auto transition-all duration-300 ease-in-out
                md:top-4 md:px-3 md:max-w-4xl
                /* Mobile Styles (Dynamic based on scroll) */
                ${scrolled ? "top-0 px-0 w-full" : "top-2 px-3 max-w-4xl"}
            `}
        >
            <div
                className={`
                    flex justify-between items-center 
                    backdrop-blur-md shadow-[0px_0px_0px_0.5px_rgba(255,255,255,0.1)]
                    px-5 py-4 transition-all duration-300
                    border-b border-white/5
                    
                    /* Desktop Styles */
                    md:rounded-full md:mt-2 md:bg-[#0a0a0a]/10

                    /* Mobile Styles */
                    ${scrolled
                        ? "rounded-none mt-0 bg-[#0a0a0a]/95" // Scrolled: Full width, dark bg
                        : "rounded-full mt-2 bg-[#0a0a0a]/10" // Top: Floating pill, transparent
                    }
                `}
            >
                <div className="flex items-center">
                    <div
                        className="bg-white text-black rounded-lg p-3 size-8 flex items-center justify-center font-bold text-2xl"
                        style={{ fontFamily: "var(--font-marck)" }}
                    >
                        P
                    </div>
                    <h1 className="text-2xl ml-1 font-bold tracking-tight" style={{ fontFamily: "var(--font-marck)" }}>
                        athixo
                    </h1>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center">
                    <Link href="/#home" className="mx-3 text-sm text-gray-300 hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link href="/#services" className="mx-3 text-sm text-gray-300 hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="/portfolio" className="mx-3 text-sm text-gray-300 hover:text-white transition-colors">
                        Portfolio
                    </Link>
                    <Link href="/about" className="mx-3 text-sm text-gray-300 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/#contact" className="mx-3 text-sm text-gray-300 hover:text-white transition-colors">
                        Contact
                    </Link>

                    <Link href="/careers" className="mx-3 text-sm text-primary hover:text-primary transition-colors">
                        Careers
                    </Link>
                    {/* <Link
                        href="https://edu.pathixo.com"
                        className="ml-4 px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-all"
                    >
                        Courses
                    </Link> */}
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setOpen(true)} className="md:hidden text-white p-1">
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`
                    fixed inset-y-0 right-0 w-full sm:w-80
                    bg-[#050505] border-l border-white/10
                    z-50 p-6 flex flex-col
                    transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1)
                    ${open ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center">
                        <div className="bg-white text-black rounded-lg flex justify-center items-center size-8 text-xl font-bold">
                            P
                        </div>
                        <span className="ml-2 text-xl font-bold tracking-tight">Pathixo</span>
                    </div>

                    <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <X className="text-white" size={24} />
                    </button>
                </div>

                {/* Nav Items */}
                <div className="flex flex-col space-y-2">
                    {[
                        { name: "Home", href: "/#home" },
                        { name: "Services", href: "/#services" },
                        { name: "Portfolio", href: "/portfolio" },
                        { name: "About", href: "/about" },
                        { name: "Contact", href: "/#contact" },
                        { name: "Careers", href: "/careers", highlight: true },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            onClick={() => setOpen(false)}
                            href={item.href}
                            className={`
                                group flex items-center justify-between p-4 rounded-xl
                                transition-all duration-300
                                ${item.highlight
                                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                                    : "hover:bg-white/5 text-gray-300 hover:text-white"
                                }
                            `}
                        >
                            <span className="text-lg font-medium">{item.name}</span>
                            <ChevronRight
                                size={18}
                                className={`
                                    opacity-0 -translate-x-2 transition-all duration-300
                                    group-hover:opacity-100 group-hover:translate-x-0
                                    ${item.highlight ? "text-primary" : "text-white/50"}
                                `}
                            />
                        </Link>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-white/10"></div>

                {/* Courses CTA */}
                {/* <div className="mt-auto">
                    <Link
                        onClick={() => setOpen(false)}
                        href="https://edu.pathixo.com"
                        className="
                            flex items-center justify-center w-full
                            text-black text-lg font-semibold
                            px-6 py-4 rounded-xl
                            bg-white
                            hover:bg-gray-200
                            transition-all duration-300
                            shadow-[0_0_20px_rgba(255,255,255,0.1)]
                        "
                    >
                        Explore Courses
                    </Link>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Pathixo. All rights reserved.</p>
                    </div>
                </div>*/}
            </div>

            {/* Backdrop for Mobile Menu */}
            <div
                className={`
                    fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden
                    transition-opacity duration-500
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => setOpen(false)}
            />
        </nav>
    )
}

export default Navigation
